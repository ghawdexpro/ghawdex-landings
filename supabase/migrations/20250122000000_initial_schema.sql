-- =====================================================
-- LOCALITIES TABLE (68 rows)
-- =====================================================
CREATE TABLE localities (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  name_mt TEXT,
  region TEXT NOT NULL,
  district TEXT,
  population INTEGER,
  avg_roof_space_sqm INTEGER,
  avg_sun_hours_year INTEGER,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  grant_eligible BOOLEAN DEFAULT true,
  gozo_premium BOOLEAN DEFAULT false,
  elevation_m INTEGER,
  description TEXT,
  seo_description TEXT,
  nearby_localities TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_localities_slug ON localities(slug);
CREATE INDEX idx_localities_district ON localities(district);

-- =====================================================
-- SERVICES TABLE (15 rows)
-- =====================================================
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  avg_cost_min INTEGER,
  avg_cost_max INTEGER,
  grant_available BOOLEAN DEFAULT false,
  install_time_days INTEGER,
  icon_name TEXT,
  image_path TEXT,
  popularity_score INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_services_slug ON services(slug);

-- =====================================================
-- SYSTEM SIZES TABLE (12 rows)
-- =====================================================
CREATE TABLE system_sizes (
  id SERIAL PRIMARY KEY,
  kw DECIMAL(4, 1) UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  typical_panel_count INTEGER,
  typical_roof_space_sqm INTEGER,
  avg_cost_malta INTEGER,
  avg_cost_gozo INTEGER,
  grant_amount_malta INTEGER,
  grant_amount_gozo INTEGER,
  annual_production_kwh INTEGER,
  annual_savings_eur INTEGER,
  payback_years DECIMAL(3, 1),
  co2_offset_kg INTEGER,
  suitable_for TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_system_sizes_kw ON system_sizes(kw);

-- =====================================================
-- PROPERTY TYPES TABLE (8 rows)
-- =====================================================
CREATE TABLE property_types (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  typical_roof_space_sqm INTEGER,
  typical_system_size_kw DECIMAL(4, 1),
  avg_installation_cost INTEGER,
  special_requirements TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- BRANDS TABLE (20 rows)
-- =====================================================
CREATE TABLE brands (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  type TEXT,
  country_origin TEXT,
  warranty_years INTEGER,
  efficiency_min DECIMAL(4, 2),
  efficiency_max DECIMAL(4, 2),
  price_tier TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- PRICE RANGES TABLE (10 rows)
-- =====================================================
CREATE TABLE price_ranges (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  min_eur INTEGER NOT NULL,
  max_eur INTEGER,
  display_text TEXT,
  typical_system_size_kw DECIMAL(4, 1),
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- FAQ QUESTIONS TABLE (500+ rows)
-- =====================================================
CREATE TABLE faq_questions (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  keywords TEXT[],
  search_volume INTEGER DEFAULT 0,
  related_localities INTEGER[],
  related_services INTEGER[],
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_faq_slug ON faq_questions(slug);
CREATE INDEX idx_faq_category ON faq_questions(category);

-- =====================================================
-- CONTENT TEMPLATES TABLE
-- =====================================================
CREATE TABLE content_templates (
  id SERIAL PRIMARY KEY,
  template_type TEXT NOT NULL,
  template_name TEXT NOT NULL,
  hero_template TEXT,
  main_content_template TEXT,
  faq_template TEXT,
  cta_template TEXT,
  variables JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- GENERATED PAGES CACHE TABLE
-- =====================================================
CREATE TABLE generated_pages (
  id SERIAL PRIMARY KEY,
  url_path TEXT UNIQUE NOT NULL,
  page_type TEXT NOT NULL,
  title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  h1 TEXT NOT NULL,
  content_json JSONB,
  content_html TEXT,
  locality_id INTEGER REFERENCES localities(id),
  service_id INTEGER REFERENCES services(id),
  system_size_id INTEGER REFERENCES system_sizes(id),
  property_type_id INTEGER REFERENCES property_types(id),
  last_generated TIMESTAMP DEFAULT NOW(),
  indexed_by_google BOOLEAN DEFAULT false,
  indexed_date TIMESTAMP,
  search_impressions INTEGER DEFAULT 0,
  search_clicks INTEGER DEFAULT 0,
  avg_position DECIMAL(5, 2),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_generated_pages_url ON generated_pages(url_path);
CREATE INDEX idx_generated_pages_type ON generated_pages(page_type);
CREATE INDEX idx_generated_pages_locality ON generated_pages(locality_id);

-- =====================================================
-- PAGE RELATIONSHIPS (Internal Linking)
-- =====================================================
CREATE TABLE page_relationships (
  id SERIAL PRIMARY KEY,
  from_page_id INTEGER REFERENCES generated_pages(id),
  to_page_id INTEGER REFERENCES generated_pages(id),
  link_text TEXT,
  link_context TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_page_rels_from ON page_relationships(from_page_id);
CREATE INDEX idx_page_rels_to ON page_relationships(to_page_id);

-- =====================================================
-- TESTIMONIALS TABLE
-- =====================================================
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  customer_name TEXT NOT NULL,
  locality_id INTEGER REFERENCES localities(id),
  property_type TEXT,
  system_size_kw DECIMAL(4, 1),
  installation_date DATE,
  testimonial_text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  verified BOOLEAN DEFAULT false,
  image_path TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- GRANT INFORMATION TABLE
-- =====================================================
CREATE TABLE grant_info (
  id SERIAL PRIMARY KEY,
  year INTEGER NOT NULL,
  grant_type TEXT NOT NULL,
  coverage_percentage INTEGER,
  max_amount_malta INTEGER,
  max_amount_gozo INTEGER,
  per_kwp_amount INTEGER,
  per_kwh_amount INTEGER,
  eligibility_criteria TEXT,
  application_url TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
