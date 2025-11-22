-- =====================================================
-- SEED LOCALITIES (68 Malta/Gozo towns)
-- =====================================================
INSERT INTO localities (slug, name, name_mt, region, district, population, avg_roof_space_sqm, avg_sun_hours_year, latitude, longitude, gozo_premium, elevation_m, description) VALUES
-- Malta - Northern Harbour
('valletta', 'Valletta', 'Il-Belt Valletta', 'Northern Harbour', 'Malta', 5827, 80, 2800, 35.8989, 14.5146, false, 56, 'Malta''s capital city, UNESCO World Heritage site'),
('sliema', 'Sliema', 'Tas-Sliema', 'Northern Harbour', 'Malta', 16000, 120, 2850, 35.9122, 14.5019, false, 10, 'Coastal town with modern apartments'),
('st-julians', 'St. Julian''s', 'San Ġiljan', 'Northern Harbour', 'Malta', 13792, 110, 2850, 35.9186, 14.4897, false, 12, 'Vibrant coastal town'),
('gzira', 'Gżira', 'Il-Gżira', 'Northern Harbour', 'Malta', 7909, 95, 2810, 35.9058, 14.4972, false, 5, 'Dense coastal town'),
('msida', 'Msida', 'L-Imsida', 'Northern Harbour', 'Malta', 7623, 100, 2810, 35.8981, 14.4878, false, 18, 'University area'),
('pieta', 'Pietà', 'Il-Pietà', 'Northern Harbour', 'Malta', 4798, 90, 2805, 35.8939, 14.4950, false, 20, 'Small coastal town'),
('floriana', 'Floriana', 'Il-Furjana', 'Northern Harbour', 'Malta', 2205, 95, 2805, 35.8936, 14.5050, false, 48, 'Fortified town'),
('pembroke', 'Pembroke', 'Pembroke', 'Northern Harbour', 'Malta', 3293, 130, 2845, 35.9314, 14.4764, false, 15, 'Residential area'),

-- Malta - Northern
('birkirkara', 'Birkirkara', 'Birkirkara', 'Northern', 'Malta', 24356, 130, 2820, 35.8972, 14.4611, false, 75, 'Largest town in Malta'),
('mosta', 'Mosta', 'Il-Mosta', 'Northern', 'Malta', 19750, 140, 2830, 35.9092, 14.4256, false, 132, 'Central Malta town'),
('naxxar', 'Naxxar', 'In-Naxxar', 'Northern', 'Malta', 14891, 145, 2840, 35.9136, 14.4436, false, 140, 'Elevated town'),
('san-gwann', 'San Ġwann', 'San Ġwann', 'Northern', 'Malta', 13699, 115, 2830, 35.9069, 14.4761, false, 72, 'Residential town'),
('mellieha', 'Mellieħa', 'Il-Mellieħa', 'Northern', 'Malta', 10087, 160, 2870, 35.9553, 14.3625, false, 120, 'Northern Malta'),
('attard', 'Attard', 'Ħ''Attard', 'Northern', 'Malta', 11799, 135, 2820, 35.8892, 14.4422, false, 93, 'Garden village'),
('rabat', 'Rabat', 'Ir-Rabat', 'Northern', 'Malta', 11497, 140, 2815, 35.8819, 14.3986, false, 134, 'Historic town'),
('swieqi', 'Swieqi', 'Is-Swieqi', 'Northern', 'Malta', 11876, 125, 2835, 35.9217, 14.4789, false, 68, 'Residential area'),
('santa-venera', 'Santa Venera', 'Santa Venera', 'Northern', 'Malta', 6956, 105, 2815, 35.8897, 14.4783, false, 55, 'Central town'),
('balzan', 'Balzan', 'Ħal Balzan', 'Northern', 'Malta', 4774, 125, 2820, 35.9003, 14.4514, false, 82, 'Quiet village'),
('lija', 'Lija', 'Ħal Lija', 'Northern', 'Malta', 3278, 135, 2820, 35.9008, 14.4456, false, 88, 'Affluent village'),
('gharghur', 'Għargħur', 'Ħal Għargħur', 'Northern', 'Malta', 2768, 140, 2835, 35.9236, 14.4525, false, 165, 'Hilltop village'),
('mdina', 'Mdina', 'L-Imdina', 'Northern', 'Malta', 243, 120, 2815, 35.8867, 14.4028, false, 185, 'Silent City'),

-- Malta - Southern Harbour
('qormi', 'Qormi', 'Ħal Qormi', 'Southern Harbour', 'Malta', 16394, 125, 2810, 35.8761, 14.4719, false, 75, 'Historic town'),
('hamrun', 'Ħamrun', 'Ħ''Amrun', 'Southern Harbour', 'Malta', 8800, 95, 2800, 35.8844, 14.4886, false, 45, 'Urban area'),
('paola', 'Paola', 'Raħal Ġdid', 'Southern Harbour', 'Malta', 8706, 100, 2805, 35.8722, 14.5019, false, 35, 'Central location'),
('marsa', 'Marsa', 'Il-Marsa', 'Southern Harbour', 'Malta', 4401, 110, 2805, 35.8814, 14.4964, false, 12, 'Industrial area'),
('santa-lucija', 'Santa Luċija', 'Santa Luċija', 'Southern Harbour', 'Malta', 3097, 100, 2810, 35.8617, 14.5094, false, 42, 'Small town'),

-- Malta - South Eastern
('zabbar', 'Żabbar', 'Ħaż-Żabbar', 'South Eastern', 'Malta', 14694, 130, 2825, 35.8758, 14.5378, false, 56, 'Traditional town'),
('fgura', 'Fgura', 'Il-Fgura', 'South Eastern', 'Malta', 11492, 110, 2815, 35.8714, 14.5167, false, 52, 'Planned town'),
('zejtun', 'Żejtun', 'Iż-Żejtun', 'South Eastern', 'Malta', 11425, 125, 2820, 35.8558, 14.5333, false, 78, 'Ancient town'),
('tarxien', 'Tarxien', 'Ħal Tarxien', 'South Eastern', 'Malta', 8583, 110, 2810, 35.8667, 14.5119, false, 48, 'Archaeological site'),
('marsaskala', 'Marsaskala', 'Marsaskala', 'South Eastern', 'Malta', 13253, 120, 2830, 35.8619, 14.5667, false, 8, 'Coastal fishing village'),
('ghaxaq', 'Għaxaq', 'Ħal Għaxaq', 'South Eastern', 'Malta', 5132, 125, 2820, 35.8486, 14.5169, false, 88, 'Expanding village'),
('kalkara', 'Kalkara', 'Ħal Kalkara', 'South Eastern', 'Malta', 2856, 115, 2815, 35.8892, 14.5306, false, 22, 'Harbour town'),
('xgajra', 'Xgħajra', 'Ix-Xgħajra', 'South Eastern', 'Malta', 1610, 110, 2820, 35.8847, 14.5489, false, 8, 'Coastal village'),
('birgu', 'Birgu', 'Il-Birgu', 'South Eastern', 'Malta', 2629, 90, 2815, 35.8878, 14.5217, false, 18, 'Vittoriosa'),
('isla', 'Isla', 'L-Isla', 'South Eastern', 'Malta', 2673, 85, 2815, 35.8869, 14.5139, false, 15, 'Senglea'),
('bormla', 'Bormla', 'Il-Bormla', 'South Eastern', 'Malta', 5508, 90, 2810, 35.8878, 14.5194, false, 12, 'Cospicua'),

-- Malta - Southern
('luqa', 'Luqa', 'Ħal Luqa', 'Southern', 'Malta', 6028, 130, 2815, 35.8592, 14.4889, false, 67, 'Airport town'),
('gudja', 'Gudja', 'Ħal Għudja', 'Southern', 'Malta', 3229, 130, 2815, 35.8497, 14.5028, false, 63, 'Small village'),
('mqabba', 'Mqabba', 'L-Imqabba', 'Southern', 'Malta', 3339, 130, 2820, 35.8489, 14.4678, false, 112, 'Agricultural village'),
('safi', 'Safi', 'Ħal Safi', 'Southern', 'Malta', 2126, 135, 2820, 35.8389, 14.4853, false, 96, 'Small village'),
('kirkop', 'Kirkop', 'Ħal Kirkop', 'Southern', 'Malta', 2289, 130, 2815, 35.8450, 14.4850, false, 78, 'Near airport'),
('zurrieq', 'Żurrieq', 'Iż-Żurrieq', 'Southern', 'Malta', 11823, 135, 2830, 35.8314, 14.4781, false, 82, 'Southern town'),
('birzebbuga', 'Birżebbuġa', 'Ħal Birżebbuġa', 'Southern', 'Malta', 9736, 125, 2835, 35.8256, 14.5269, false, 12, 'Coastal town'),
('qrendi', 'Qrendi', 'Ħal Qrendi', 'Southern', 'Malta', 3148, 140, 2830, 35.8347, 14.4514, false, 142, 'Near Blue Grotto'),

-- Malta - Western
('siggiewi', 'Siġġiewi', 'Is-Siġġiewi', 'Western', 'Malta', 8349, 140, 2825, 35.8553, 14.4367, false, 200, 'Rural town'),
('dingli', 'Dingli', 'Ħad-Dingli', 'Western', 'Malta', 3865, 150, 2840, 35.8619, 14.3828, false, 250, 'Highest point'),
('zebbug-malta', 'Żebbuġ', 'Ħaż-Żebbuġ', 'Western', 'Malta', 12102, 130, 2820, 35.8719, 14.4414, false, 110, 'Historic town'),

-- Gozo localities (14 towns)
('victoria-gozo', 'Victoria', 'Ir-Rabat', 'Gozo', 'Gozo', 6901, 130, 2850, 36.0444, 14.2394, true, 156, 'Capital of Gozo'),
('nadur', 'Nadur', 'In-Nadur', 'Gozo', 'Gozo', 4509, 140, 2860, 36.0392, 14.2942, true, 115, 'Eastern Gozo'),
('xaghra', 'Xagħra', 'Ix-Xagħra', 'Gozo', 'Gozo', 4582, 140, 2855, 36.0511, 14.2656, true, 137, 'Central Gozo'),
('xewkija', 'Xewkija', 'Ix-Xewkija', 'Gozo', 'Gozo', 3625, 135, 2850, 36.0314, 14.2586, true, 73, 'Rotunda church'),
('gharb-gozo', 'Għarb', 'L-Għarb', 'Gozo', 'Gozo', 1428, 150, 2865, 36.0650, 14.2097, true, 142, 'Western Gozo'),
('ghajnsielem', 'Għajnsielem', 'Għajnsielem', 'Gozo', 'Gozo', 3200, 135, 2855, 36.0264, 14.2828, true, 62, 'Ferry terminal'),
('munxar-gozo', 'Munxar', 'Il-Munxar', 'Gozo', 'Gozo', 1138, 140, 2850, 36.0322, 14.2344, true, 85, 'Quiet village'),
('qala-gozo', 'Qala', 'Qala', 'Gozo', 'Gozo', 1929, 140, 2860, 36.0364, 14.3136, true, 75, 'Eastern Gozo'),
('kercem-gozo', 'Kerċem', 'Ħal Kerċem', 'Gozo', 'Gozo', 1938, 135, 2850, 36.0417, 14.2294, true, 90, 'Central village'),
('san-lawrenz-gozo', 'San Lawrenz', 'San Lawrenz', 'Gozo', 'Gozo', 723, 155, 2870, 36.0556, 14.2033, true, 65, 'Western Gozo'),
('sannat-gozo', 'Sannat', 'Is-Sannat', 'Gozo', 'Gozo', 2242, 145, 2855, 36.0214, 14.2539, true, 115, 'Southern Gozo'),
('fontana-gozo', 'Fontana', 'Il-Fontana', 'Gozo', 'Gozo', 988, 130, 2850, 36.0400, 14.2383, true, 120, 'Near Victoria'),
('zebbug-gozo', 'Żebbuġ', 'Iż-Żebbuġ', 'Gozo', 'Gozo', 1937, 135, 2855, 36.0728, 14.2444, true, 95, 'Northern Gozo'),
('ghasri-gozo', 'Għasri', 'L-Għasri', 'Gozo', 'Gozo', 525, 150, 2865, 36.0631, 14.2253, true, 125, 'Western village');

-- =====================================================
-- SEED SERVICES (15 rows)
-- =====================================================
INSERT INTO services (slug, name, description, category, avg_cost_min, avg_cost_max, grant_available, install_time_days, icon_name, popularity_score) VALUES
('residential-solar', 'Residential Solar Installation', 'Complete photovoltaic system installation for homes', 'Energy', 3000, 15000, true, 14, 'Home', 100),
('commercial-solar', 'Commercial Solar Installation', 'Large-scale solar systems for businesses', 'Energy', 10000, 50000, true, 21, 'Building2', 85),
('battery-storage', 'Battery Storage Solutions', 'Energy storage systems with batteries', 'Storage', 4000, 12000, true, 7, 'Battery', 95),
('solar-pergola', 'Solar Pergolas', 'Outdoor structures with integrated solar panels', 'Outdoor', 8000, 20000, false, 21, 'Tent', 70),
('solar-carport', 'Solar Carports', 'Covered parking with solar panel canopy', 'Outdoor', 10000, 25000, false, 28, 'Car', 65),
('roof-frames', 'Custom Roof Frames', 'Structural support for roofs unable to bear weight', 'Construction', 2000, 8000, false, 14, 'HardHat', 60),
('liquid-membrane', 'Liquid Membrane Waterproofing', 'Roof waterproofing solutions', 'Construction', 1500, 5000, false, 7, 'Droplets', 55),
('electrical-services', 'Electrical Services', 'Complete electrical installations and upgrades', 'Electrical', 500, 5000, false, 7, 'Zap', 75),
('solar-maintenance', 'Solar Panel Maintenance', 'Regular cleaning and system checks', 'Maintenance', 150, 500, false, 1, 'Wrench', 80),
('solar-repair', 'Solar Panel Repair', 'Troubleshooting and repairs', 'Maintenance', 200, 2000, false, 3, 'Tool', 70),
('energy-audit', 'Energy Audit', 'Professional energy consumption analysis', 'Consulting', 200, 800, false, 2, 'ClipboardCheck', 65),
('indoor-farming', 'Indoor Farming Systems', 'Solar-powered sustainable agriculture', 'Innovation', 5000, 30000, false, 30, 'Sprout', 50),
('off-grid-solar', 'Off-Grid Solar Systems', 'Complete energy independence solutions', 'Energy', 15000, 40000, false, 21, 'Power', 75),
('hybrid-solar', 'Hybrid Solar Systems', 'Grid-tied with battery backup', 'Energy', 8000, 20000, true, 14, 'Plug', 90),
('ev-charger', 'EV Charger Installation', 'Electric vehicle charging stations', 'Electrical', 800, 3000, false, 7, 'BatteryCharging', 85);

-- =====================================================
-- SEED SYSTEM SIZES (12 rows)
-- =====================================================
INSERT INTO system_sizes (kw, slug, typical_panel_count, typical_roof_space_sqm, avg_cost_malta, avg_cost_gozo, grant_amount_malta, grant_amount_gozo, annual_production_kwh, annual_savings_eur, payback_years, co2_offset_kg, suitable_for) VALUES
(3.0, '3kw', 8, 16, 3200, 3000, 1875, 2850, 4500, 675, 2.8, 2250, ARRAY['apartment', 'small-townhouse']),
(4.0, '4kw', 10, 20, 4000, 3800, 2500, 3800, 6000, 900, 2.7, 3000, ARRAY['apartment', 'townhouse']),
(5.0, '5kw', 13, 26, 4800, 4600, 3000, 4750, 7500, 1125, 2.6, 3750, ARRAY['townhouse', 'semi-detached']),
(6.0, '6kw', 16, 32, 5600, 5400, 3000, 5700, 9000, 1350, 2.5, 4500, ARRAY['townhouse', 'villa']),
(7.0, '7kw', 18, 36, 6300, 6100, 3000, 6650, 10500, 1575, 2.4, 5250, ARRAY['villa', 'large-townhouse']),
(8.0, '8kw', 21, 42, 7000, 6800, 3000, 7600, 12000, 1800, 2.3, 6000, ARRAY['villa', 'farmhouse']),
(10.0, '10kw', 26, 52, 8500, 8300, 3000, 9500, 15000, 2250, 2.2, 7500, ARRAY['villa', 'farmhouse', 'small-commercial']),
(12.0, '12kw', 31, 62, 10000, 9800, 3000, 11400, 18000, 2700, 2.1, 9000, ARRAY['large-villa', 'farmhouse', 'commercial']),
(15.0, '15kw', 39, 78, 12000, 11800, 3000, 14250, 22500, 3375, 2.0, 11250, ARRAY['farmhouse', 'commercial', 'warehouse']),
(20.0, '20kw', 52, 104, 15500, 15300, 3000, 19000, 30000, 4500, 1.9, 15000, ARRAY['commercial', 'warehouse', 'factory']),
(25.0, '25kw', 65, 130, 19000, 18800, 3000, 23750, 37500, 5625, 1.8, 18750, ARRAY['commercial', 'factory', 'hotel']),
(30.0, '30kw', 78, 156, 22500, 22300, 3000, 28500, 45000, 6750, 1.7, 22500, ARRAY['factory', 'hotel', 'large-commercial']);

-- =====================================================
-- SEED PROPERTY TYPES (8 rows)
-- =====================================================
INSERT INTO property_types (slug, name, typical_roof_space_sqm, typical_system_size_kw, avg_installation_cost, special_requirements) VALUES
('apartment', 'Apartment', 80, 3.0, 3500, 'Requires building approval and collective roof access'),
('townhouse', 'Townhouse', 120, 5.0, 5000, 'Individual roof ownership simplifies installation'),
('villa', 'Villa', 180, 8.0, 7500, 'Ample roof space allows for larger systems'),
('farmhouse', 'Farmhouse', 250, 12.0, 11000, 'Rural location ideal for off-grid or large systems'),
('commercial', 'Commercial Building', 400, 20.0, 18000, 'Requires commercial-grade equipment and permits'),
('warehouse', 'Warehouse', 800, 30.0, 26000, 'Large flat roofs perfect for maximum solar capacity'),
('hotel', 'Hotel', 600, 25.0, 22000, 'High energy consumption justifies large investment'),
('factory', 'Factory', 1000, 40.0, 35000, 'Industrial operations benefit from substantial systems');

-- =====================================================
-- SEED GRANT INFO (2025 data)
-- =====================================================
INSERT INTO grant_info (year, grant_type, coverage_percentage, max_amount_malta, max_amount_gozo, per_kwp_amount, per_kwh_amount, eligibility_criteria, application_url, active) VALUES
(2025, 'pv_standard', 50, 2500, 3750, 625, NULL, 'Malta residents with standard inverter PV system', 'https://www.servizz.gov.mt', true),
(2025, 'pv_hybrid', 50, 3000, 4500, 750, NULL, 'Malta residents with hybrid inverter PV system', 'https://www.servizz.gov.mt', true),
(2025, 'battery_storage', 80, 7200, 8550, NULL, 720, 'Battery storage systems (10kWh max)', 'https://www.servizz.gov.mt', true),
(2025, 'hybrid_inverter', 80, 1800, 2100, 450, NULL, 'Hybrid inverter for battery systems', 'https://www.servizz.gov.mt', true),
(2025, 'combined_max', NULL, 10200, 11550, NULL, NULL, 'Maximum combined grant (PV + battery + inverter)', 'https://www.servizz.gov.mt', true);
