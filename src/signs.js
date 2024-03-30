const signs = [
  {
    'image': 'images/UK_traffic_sign_543.svg',
    'name': 'Traffic signals ahead',
    'ru': 'Светофор впереди'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_crossroads.svg',
    'name': 'Crossroads',
    'ru': 'Перекресток'
  },
  {
    'image': 'images/UK_traffic_sign_505.1_(left).svg',
    'name': 'T-junction',
    'ru': 'Т-образный перекресток'
  },
  {
    'image': 'images/UK_traffic_sign_506.1_(variant_1,_right).svg',
    'name': 'Side road',
    'ru': 'Боковая дорога'
  },
  {
    'image': 'images/UK_traffic_sign_507.1_(variant_1,_right).svg',
    'name': 'Staggered junction',
    'ru': 'Смещенный перекресток'
  },
  {
    'image': 'images/UK_traffic_sign_508.1.svg',
    'name': 'Traffic merges from the left',
    'ru': 'Примыкание с левой стороны'
  },
  {
    'image': 'images/UK_traffic_sign_509.1.svg',
    'name': 'Traffic merges onto the main carriageway',
    'ru': 'Примыкание к главной дороге'
  },
  {
    'image': 'images/UK_traffic_sign_510.svg',
    'name': 'Roundabout (warning)',
    'ru': 'Кольцевое движение (предупреждение)'
  },
  {
    'image': 'images/UK_traffic_sign_512_(right).svg',
    'name': 'Bend to right (left if reversed)',
    'ru': 'Поворот направо (налево, если зеркально)'
  },
  {
    'image': 'images/UK_traffic_sign_513_(left).svg',
    'name': 'Double bend first to the left (right if reversed)',
    'ru': 'Извилистый поворот налево (направо, если зеркально)'
  },
  {
    'image': 'images/UK_traffic_sign_512.1_(right).svg',
    'name': 'Junction on a bend outside (may be reversed)',
    'ru': 'Примыкание на повороте снаружи (может быть зеркально)'
  },
  {
    'image': 'images/UK_traffic_sign_512.2_(right).svg',
    'name': 'Junction on a bend inside (may be reversed)',
    'ru': 'Перекресток на изгибе изнутри (может быть зеркально)'
  },
  {
    'image': 'images/UK_traffic_sign_516.svg',
    'name': 'Road narrows on both sides',
    'ru': 'Дорога сужается с обеих сторон'
  },
  {
    'image': 'images/UK_traffic_sign_517_(right).svg',
    'name': 'Road narrows on the right (left if reversed)',
    'ru': 'Дорога сужается справа (слева, если зеркально)'
  },
  {
    'image': 'images/UK_traffic_sign_520.svg',
    'name': 'End of dual carriageway',
    'ru': 'Конец двухполосной дороги'
  },
  {
    'image': 'images/UK_traffic_sign_521.svg',
    'name': 'Two-way traffic',
    'ru': 'Движение в обоих направлениях'
  },
  {
    'image': 'images/UK_traffic_sign_522.svg',
    'name': 'Two-way traffic on route crossing ahead',
    'ru': 'Движение в обоих направлениях на пересечении дорог'
  },
  {
    'image': 'images/UK_traffic_sign_523.1.svg',
    'name': 'Steep descent',
    'ru': 'Крутой спуск'
  },
  {
    'image': 'images/UK_traffic_sign_524.1.svg',
    'name': 'Steep ascent',
    'ru': 'Крутой подъем'
  },
  {
    'image': 'images/UK_traffic_sign_529.svg',
    'name': 'Opening or swing bridge',
    'ru': 'Открывающийся или поворотный мост'
  },
  {
    'image': 'images/UK_traffic_sign_555.svg',
    'name': 'Riverbank or quayside',
    'ru': 'Берег реки или набережная'
  },
  {
    'image': 'images/UK_traffic_sign_555.1.svg',
    'name': 'Water course alongside road',
    'ru': 'Водный поток вдоль дороги'
  },
  {
    'image': 'images/UK_traffic_sign_556.1.svg',
    'name': 'Soft verges left',
    'ru': 'Мягкие обочины слева'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_friable_street.svg',
    'name': 'Soft verges right',
    'ru': 'Мягкие обочины справа'
  },
  {
    'image': 'images/UK_traffic_sign_529.1.svg',
    'name': 'Tunnel',
    'ru': 'Туннель'
  },
  {
    'image': 'images/UK_traffic_sign_528.svg',
    'name': 'Hump bridge',
    'ru': 'Горбатый мост'
  },
  {
    'image': 'images/UK_traffic_sign_556.svg',
    'name': 'Uneven road',
    'ru': 'Неровная дорога'
  },
  {
    'image': 'images/UK_traffic_sign_557.svg',
    'name': 'Slippery road',
    'ru': 'Скользкая дорога'
  },
  {
    'image': 'images/UK_traffic_sign_581.svg',
    'name': 'Side winds',
    'ru': 'Боковой ветер'
  },
  {
    'image': 'images/UK_traffic_sign_558.svg',
    'name': 'Low-flying aircraft or sudden noise',
    'ru': 'Низколетящий самолет или внезапный шум'
  },
  {
    'image': 'images/UK_traffic_sign_558.1.svg',
    'name': 'Low-flying helicopters or sudden noise',
    'ru': 'Низколетящие вертолеты или внезапный шум'
  },
  {
    'image': 'images/UK_traffic_sign_559_(left).svg',
    'name': 'Falling or fallen rocks',
    'ru': 'Падающие или упавшие камни'
  },
  {
    'image': 'images/UK_traffic_sign_584.svg',
    'name': 'Traffic queues likely ahead',
    'ru': 'Возможна пробка впереди'
  },
  {
    'image': 'images/UK_traffic_sign_582.svg',
    'name': 'Slow-moving military vehicles likely ahead',
    'ru': 'Медленные военные ТС на дороге или пересекают ее'
  },
  {
    'image': 'images/UK_traffic_sign_583.svg',
    'name': 'Slow-moving vehicles',
    'ru': 'Медленно движущиеся ТС'
  },
  {
    'image': 'images/UK_traffic_sign_554.2.svg',
    'name': 'Ice or Snowdrifts',
    'ru': 'Лед или сугробы'
  },
  {
    'image': 'images/UK_traffic_sign_562.svg',
    'name': 'Other dangers (must be used to indicate the hazard)',
    'ru': 'Другие опасности'
  },
  {
    'image': 'images/UK_traffic_sign_544.svg',
    'name': 'Zebra crossing',
    'ru': 'Пешеходный переход'
  },
  {
    'image': 'images/UK_traffic_sign_544.1.svg',
    'name': 'Pedestrians ahead',
    'ru': 'Пешеходы впереди'
  },
  {
    'image': 'images/UK_traffic_sign_544.2.svg',
    'name': 'Frail / blind / disabled pedestrians likely crossing',
    'ru': 'Медленно передвигающиеся пешеходы'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_child.svg',
    'name': 'Children going to or from school',
    'ru': 'Дети идут в школу или из нее'
  },
  {
    'image': 'images/UK_traffic_sign_550.2.svg',
    'name': 'Horse-drawn vehicles likely ahead',
    'ru': 'ТС, запряженные лошадьми'
  },
  {
    'image': 'images/UK_traffic_sign_550.1.svg',
    'name': 'Accompanied horses or ponies likely ahead or crossing',
    'ru': 'Лошади или пони с сопровождением на дороге или пересекают ее'
  },
  {
    'image': 'images/UK_traffic_sign_550.svg',
    'name': 'Wild horses or ponies',
    'ru': 'Дикие лошади или пони'
  },
  {
    'image': 'images/UK_traffic_sign_551.svg',
    'name': 'Wild animals',
    'ru': 'Дикие животные'
  },
  {
    'image': 'images/UK_traffic_sign_553.1.svg',
    'name': 'Agricultural vehicles',
    'ru': 'Сельскохозяйственные ТС'
  },
  {'image': 'images/UK_traffic_sign_548.svg', 'name': 'Cattle', 'ru': 'Скот'},
  {
    'image': 'images/UK_traffic_sign_772.svg',
    'name': 'Tramway',
    'ru': 'Трамвай'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_give_way_ahead.svg',
    'name': 'Give way ahead',
    'ru': 'Уступи дорогу впереди'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_stop_ahead.svg',
    'name': 'Stop ahead',
    'ru': 'Стоп впереди'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_distance_to_level_crossing.svg',
    'name': 'Distance to level crossing',
    'ru': 'Расстояние до ЖД переезда'
  },
  {
    'image': 'images/Cyprus_road_sign_obstacle.svg',
    'name': 'Obstacle',
    'ru': 'Препятствие'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_obstacle_left.svg',
    'name': 'Obstacle left',
    'ru': 'Препятствие слева'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_obstacle_right.svg',
    'name': 'Obstacle right',
    'ru': 'Препятствие справа'
  },
  {
    'image': 'images/Cyprus_road_sign_no_hand_vehicles.svg',
    'name': 'No hand vehicles',
    'ru': 'Запрещено движение ручных ТС'
  },
  {
    'image': 'images/Cyprus_road_sign_no_motorcycles.svg',
    'name': 'No motorcycles',
    'ru': 'Запрещено движение мотоциклов'
  },
  {
    'image': 'images/Cyprus_road_sign_no_mopeds.svg',
    'name': 'No mopeds',
    'ru': 'Запрещено движение мопедов'
  },
  {
    'image': 'images/Cyprus_road_sign_no_motor_vehicles.svg',
    'name': 'No motor vehicles',
    'ru': 'Запрещено движение моторных ТС'
  },
  {
    'image': 'images/Cyprus_road_sign_no_agricle_vehicles.svg',
    'name': 'No agricle vehicles',
    'ru': 'Запрещено движение сельскохозяйственных ТС'
  },
  {
    'image': 'images/Cyprus_road_sign_no_animal_vehicles.svg',
    'name': 'No animal-drawn vehicles',
    'ru': 'Запрещено движение ТС, запряженных животными'
  },
  {
    'image': 'images/Cyprus_road_sign_toll_post.svg',
    'name': 'Toll post',
    'ru': 'Пункт оплаты проезда'
  },
  {
    'image': 'images/Cyprus_road_sign_no_horn.svg',
    'name': 'No horn',
    'ru': 'Запрещено сигналить'
  },
  {
    'image': 'images/Cyprus_road_sign_customs.svg',
    'name': 'Customs',
    'ru': 'Таможня'
  },
  {
    'image': 'images/Cyprus_road_sign_minimum_distance.svg',
    'name': 'Minimum distance',
    'ru': 'Минимальное расстояние'
  },
  {
    'image': 'images/UK_traffic_sign_619.svg',
    'name': 'No motor vehicles (both car and motorcycle)',
    'ru': 'Запрещено движение моторных ТС (авто и мото)'
  },
  {
    'image': 'images/UK_traffic_sign_811.svg',
    'name': 'Priority over vehicles from the opposite direction',
    'ru': 'Приоритет перед встречными транспортными средствами'
  },
  {
    'image': 'images/UK_traffic_sign_617.svg',
    'name': 'No vehicles',
    'ru': 'Запрещено движение ТС'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_large.svg',
    'name': 'No vehicles exceeding width on the sign',
    'ru': 'Запрещено движение ТС, превышающих ширину'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_height.svg',
    'name': 'No vehicles exceeding height on the sign',
    'ru': 'Запрещено движение ТС, превышающих высоту'
  },
  {
    'image': 'images/UK_traffic_sign_622.1A.svg',
    'name': 'No heavy vehicles exceeding weight on the sign',
    'ru': 'Запрещено движение тяжелых ТС, превышающих вес'
  },
  {
    'image': 'images/Cyprus_road_sign_no_heavy_vehicles.svg',
    'name': 'No heavy vehicles',
    'ru': 'Запрещено движение тяжелых ТС'
  },
  {
    'image': 'images/UK_traffic_sign_622.7.svg',
    'name': 'No towed caravans',
    'ru': 'Запрещено буксировать прицепы'
  },
  {
    'image': 'images/UK_traffic_sign_616.svg',
    'name': 'No Entry',
    'ru': 'Въезд запрещен'
  },
  {
    'image': 'images/UK_traffic_sign_612.svg',
    'name': 'No right turn',
    'ru': 'Поворот направо запрещен'
  },
  {
    'image': 'images/UK_traffic_sign_613.svg',
    'name': 'No left turn',
    'ru': 'Поворот налево запрещен'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_speed.svg',
    'name': 'Maximum speed limit',
    'ru': 'Максимальное ограничение скорости'
  },
  {
    'image': 'images/Cyprus_road_sign_end_maximum_speed.svg',
    'name': 'End of maximum speed limit',
    'ru': 'Конец максимального ограничения скорости'
  },
  {
    'image': 'images/UK_traffic_sign_615.svg',
    'name': 'Priority of vehicles from the opposite direction',
    'ru': 'Преимущество встречных транспортнх средств'
  },
  {
    'image': 'images/UK_traffic_sign_632.svg',
    'name': 'No overtaking',
    'ru': 'Обгон запрещён'
  },
  {
    'image': 'images/Cyprus_road_sign_end_no_overpass.svg',
    'name': 'End of no overtaking',
    'ru': 'Конец запрета на обгон'
  },
  {
    'image': 'images/Cyprus_road_sign_no_overpass_heavy_vehicles.svg',
    'name': 'No overtaking by heavy vehicles',
    'ru': 'Запрещен обгон для грузовых ТС'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_single_weight.svg',
    'name': 'Maximum single weight',
    'ru': 'Максимальный вес на ось'
  },
  {
    'image': 'images/UK_traffic_sign_671.svg',
    'name': 'End of all local bans on moving vehicles',
    'ru': 'Конец всех ограничений'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_lenght.svg',
    'name': 'Maximum length',
    'ru': 'Максимальная длина'
  },
  {
    'image': 'images/Cyprus_road_sign_no_water_heavy_vehicles.svg',
    'name': 'No water heavy vehicles',
    'ru': 'Запрещено движение тяжелых ТС по воде'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_heavy.svg',
    'name': 'Maximum heavy',
    'ru': 'Максимальный вес'
  },
  {
    'image': 'images/UK_traffic_sign_622.8.svg',
    'name': 'Carrying explosives prohibited (such as fireworks)',
    'ru': 'Запрещена перевозка взрывчатых веществ'
  },
  {
    'image': 'images/UK_traffic_sign_614.svg',
    'name': 'No U-turns',
    'ru': 'Разворот запрещён'
  },
  {
    'image': 'images/Cyprus_road_sign_police.svg',
    'name': 'Police',
    'ru': 'Полиция'
  },
  {
    'image': 'images/Cyprus_road_sign_-_STOP.svg',
    'name': 'Stop sign',
    'ru': 'Стоп'
  },
  {
    'image': 'images/Cyprus_road_sign_priority_road.svg',
    'name': 'Priority road',
    'ru': 'Главная дорога'
  },
  {
    'image': 'images/Cyprus_road_sign_end_priority_road.svg',
    'name': 'End of priority road',
    'ru': 'Конец главной дороги'
  },
  {
    'image': 'images/UK_traffic_sign_605.2.svg',
    'name': 'Stop, crossroads by children',
    'ru': 'Стоп, перекресток с детьми'
  },
  {
    'image': 'images/UK_traffic_sign_7024.svg',
    'name': 'Go ahead (for manual traffic control)',
    'ru': 'Продолжайте движение (знак регулировщика)'
  },
  {
    'image': 'images/Cyprus_road_sign_give_way.svg',
    'name': 'Give way',
    'ru': 'Уступи дорогу'
  },
  {
    'image': 'images/Cyprus_road_sign_cross_guided.svg',
    'name': 'Guided crossroad, do not stop except waiting for a right turn',
    'ru': 'Остановка на перекрестке запрещена, кроме ожидания правого поворота'
  },
  {
    'image': 'images/UK_traffic_sign_636.svg',
    'name': 'No parking',
    'ru': 'Стоянка запрещена'
  },
  {
    'image': 'images/UK_traffic_sign_642.svg',
    'name': 'No stopping',
    'ru': 'Остановка запрещена'
  },
  {
    'image': 'images/Cyprus_road_sign_no_park_impares.svg',
    'name': 'No parking on odd days',
    'ru': 'Запрещена стоянка в нечетные дни'
  },
  {
    'image': 'images/Cyprus_road_sign_no_park_pares.svg',
    'name': 'No parking on even days',
    'ru': 'Запрещена стоянка в четные дни'
  },
  {
    'image': 'images/Cyprus_road_sign_no_parking_zone.svg',
    'name': 'No parking zone',
    'ru': 'Зона запрещенной стоянки'
  },
  {
    'image': 'images/Cyprus_road_sign_end_no_parking_zone.svg',
    'name': 'End of no parking zone',
    'ru': 'Конец зоны запрещенной стоянки'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_go_streight.svg',
    'name': 'Go straight ahead only',
    'ru': 'Только прямо'
  },
  {
    'image': 'images/UK_traffic_sign_606_(left).svg',
    'name': 'Turn left',
    'ru': 'Поворот налево'
  },
  {
    'image': 'images/UK_traffic_sign_606_(right).svg',
    'name': 'Turn right',
    'ru': 'Поворот направо'
  },
  {
    'image': 'images/UK_traffic_sign_609_(left).svg',
    'name': 'Turn left ahead',
    'ru': 'Поворот налево впереди'
  },
  {
    'image': 'images/UK_traffic_sign_609_(right).svg',
    'name': 'Turn right ahead',
    'ru': 'Поворот направо впереди'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_go_or_left.svg',
    'name': 'Go straight or turn left ahead',
    'ru': 'Прямо или поворот налево впереди'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_go_or_right.svg',
    'name': 'Go straight or turn right ahead',
    'ru': 'Прямо или поворот направо впереди'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_left_or_right.svg',
    'name': 'Turn left or right ahead',
    'ru': 'Поворот налево или направо впереди'
  },
  {
    'image': 'images/UK_traffic_sign_610_(left).svg',
    'name': 'Keep left',
    'ru': 'Держитесь левее'
  },
  {
    'image': 'images/UK_traffic_sign_610_(right).svg',
    'name': 'Keep right',
    'ru': 'Держитесь правее'
  },
  {
    'image': 'images/UK_traffic_sign_611.svg',
    'name': 'Pass on either side',
    'ru': 'Движение в любую сторону'
  },
  {
    'image': 'images/UK_traffic_sign_611.1.svg',
    'name': 'Roundabout (mandatory)',
    'ru': 'Круговое движение (предписание)'
  },
  {
    'image': 'images/Cyprus_road_sign_one_way_road.svg',
    'name': 'One-way traffic',
    'ru': 'Односторонее движение'
  },
  {
    'image': 'images/Cyprus_road_sign_one_way_lateral_road.svg',
    'name': 'One-way road (lateral)',
    'ru': 'Односторонее движение (боковое)'
  },
  {
    'image': 'images/UK_traffic_sign_672.svg',
    'name': 'Minimum speed limit',
    'ru': 'Минимальная скорость'
  },
  {
    'image': 'images/UK_traffic_sign_673.svg',
    'name': 'End of minimum speed limit',
    'ru': 'Конец минимальной скорости'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_chains.svg',
    'name': 'Snow chains mandatory',
    'ru': 'Обязательные цепи на колесах в зимний период'
  },
  {
    'image': 'images/Cyprus_road_sign_horse_street.svg',
    'name': 'Horse street mandatory',
    'ru': 'Движение лошадей'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_pedestrian_way.svg',
    'name': 'Pedestrian road mandatory',
    'ru': 'Движение пешеходов'
  },
  {
    'image': 'images/Cyprus_road_sign_road_bump_50.svg',
    'name': 'Curving road surface, the speed limit is set',
    'ru': 'Извилистая дорога, установлено ограничение скорости'
  },
  {
    'image': 'images/Cyprus_road_sign_humped_crossing.svg',
    'name': 'Humped crossing',
    'ru': 'Лежачий полицейский'
  },
  {
    'image': 'images/Cyprus_road_sign_humped_pellcan_crossing.svg',
    'name': 'Humped «pelican» crossing',
    'ru': 'Переход с кнопкой и лежачим полицейским'
  },
  {
    'image': 'images/Cyprus_road_sign_school.svg',
    'name': 'School',
    'ru': 'Школа'
  },
  {
    'image': 'images/Cyprus_road_sign_road_humps_left.svg',
    'name': 'Road humps left',
    'ru': 'Лежачий полицейский (влево)'
  },
  {
    'image': 'images/Cyprus_road_sign_road_humps_right.svg',
    'name': 'Road humps right',
    'ru': 'Лежачий полицейский (вправо)'
  },
  {
    'image': 'images/Cyprus_road_sign_road_humps.svg',
    'name': 'Road humps',
    'ru': 'Лежачие полицейские'
  },
  {
    'image': 'images/Cyprus_road_sign_next_destinations.svg',
    'name': 'Confirmation sign (with highway)',
    'ru': 'Знак подтверждения (с автострадой)'
  },
  {
    'image': 'images/Cyprus_road_sign_destinations_road_crossing.svg',
    'name': 'Direction sign (at a road crossing)',
    'ru': 'Знак направления (на перекрестке)'
  },
  {
    'image': 'images/Cyprus_road_sign_destinations_white.svg',
    'name': 'Direction sign (white)',
    'ru': 'Знак направления (белый)'
  },
  {
    'image': 'images/Cyprus_road_sign_destinations_blue.svg',
    'name': 'Direction sign (blue)',
    'ru': 'Знак направления (синий)'
  },
  {
    'image': 'images/Cyprus_road_sign_bus_stop.svg',
    'name': 'Bus stop',
    'ru': 'Остановка автобуса'
  },
  {
    'image': 'images/Cyprus_road_sign_pedonal_crossing.svg',
    'name': 'Pedestrian crossing',
    'ru': 'Пешеходный переход'
  },
  {
    'image': 'images/Cyprus_road_sign_parking.svg',
    'name': 'Parking',
    'ru': 'Парковка'
  },
  {
    'image': 'images/Cyprus_road_sign_cul_de_sac.svg',
    'name': 'Dead end straight ahead',
    'ru': 'Тупик прямо'
  },
  {
    'image': 'images/Cyprus_road_sign_cul_de_sac_ahead_left.svg',
    'name': 'Dead end left',
    'ru': 'Тупик налево'
  },
  {
    'image': 'images/Cyprus_road_sign_cul_de_sac_ahead_right.svg',
    'name': 'Dead end right',
    'ru': 'Тупик направо'
  },
  {
    'image': 'images/Cyprus_road_sign_SOS.svg',
    'name': 'Emergency phone',
    'ru': 'Телефон экстренной связи'
  },
  {
    'image': 'images/Cyprus_road_sign_road_for_motorvehicles.svg',
    'name': 'Express road',
    'ru': 'Автомагистраль'
  },
  {
    'image': 'images/Cyprus_road_sign_end_road_for_motorvehicles.svg',
    'name': 'End of expressway',
    'ru': 'Конец автомагистрали'
  },
  {
    'image': 'images/Cyprus_road_sign_transitability.svg',
    'name': 'Open road (Only for vehicles with snow chains)',
    'ru': 'Проезд (только для ТС с цепями противоскольжения)'
  },
  {
    'image': 'images/Cyprus_road_sign_drive_on_the_left.svg',
    'name': 'Warning for driving on the left',
    'ru': 'Предупреждение о движении по левой стороне'
  },
  {
    'image': 'images/Cyprus_road_sign_vehicles_exit.svg',
    'name': 'Vehicle exit',
    'ru': 'Выезд для ТС'
  },
  {
    'image': 'images/Cyprus_road_sign_general_limits.svg',
    'name': 'General speed limits',
    'ru': 'Общие ограничения скорости'
  },
  {
    'image': 'images/Cyprus_road_sign_roundabound_destinations.svg',
    'name': 'Direction sign at a roundabout',
    'ru': 'Знак направления на кольцевом движении'
  },
  {
    'image': 'images/Cyprus_road_sign_confirm.svg',
    'name': 'Confirmation sign',
    'ru': 'Знак подтверждения'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H7-V1-1.svg',
    'name': 'Allowed only for disabled vehicles',
    'ru': 'Только для инвалидов'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H4a-V1-1.svg',
    'name': '«No stop and parking», perpendicular to the street',
    'ru': '«Остановка запрещена», перпендикулярный улице'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H4b-V1-1.svg',
    'name': 'Repetition of «No stop and parking», perpendicular to the street',
    'ru': 'Повторение знака «Остановка запрещена», перпендикулярного улице'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H4c-V1-1.svg',
    'name': 'End of «No stop and parking» placed perpendicular to the street',
    'ru': 'Конец знака «Остановка запрещена», перпендикулярного улице'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H1-V1-1.svg',
    'name': 'Distance from the sign to the signed area',
    'ru': 'Расстояние от знака до зоны действия знака'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H2-V1-1.svg',
    'name':
        'Length of the hazardous section of prohibition or restriction area',
    'ru': 'Длина опасного участка'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H3a-V1-1.svg',
    'name':
        'A no stop and parking sign from the position of the sign placed parallel to the street',
    'ru': 'Остановка запрещена от знака, параллельного улице'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H3b-V1-1.svg',
    'name':
        'Reminder of a no stop and parking sign placed parallel to the street',
    'ru': 'Напоминание о знаке Остановка запрещена, параллельного улице'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H9-V1-1.svg',
    'name': 'Icy road',
    'ru': 'Скользкая дорога'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H8b-V1-1.svg',
    'name': 'Direction of priority road',
    'ru': 'Направление главной дороги'
  },
  {
    'image': 'images/City_speed_limit_sign_in_Polis,_Cyprus.svg',
    'name': 'Entering a residential area - The speed is limited',
    'ru': 'Въезд в жилую зону - Скорость ограничена'
  },
  {
    'image': 'images/Highway_begin_in_Cyprus.png',
    'name': 'Highway',
    'ru': 'Автомагистраль'
  },
  {
    'image': 'images/Informational_sign_on_a_motorway_in_Cyprus.svg',
    'name': 'Highway exit warning',
    'ru': 'Предупреждение выезде с автомагистрали'
  },
  {
    'image': 'images/Motorway_exit_sign_in_Cyprus.png',
    'name': 'Motorway exit',
    'ru': 'Выезд с автомагистрали'
  },
  {
    'image': 'images/UK_traffic_sign_955.svg',
    'name': 'Cycle lane',
    'ru': 'Велосипедная дорожка'
  },
  {
    'image': 'images/UK_traffic_sign_957.svg',
    'name': 'Cycle path separated from pedestrian path',
    'ru': 'Велосипедная дорожка отделена от пешеходной'
  },
  {
    'image': 'images/UK_traffic_sign_957R.svg',
    'name': 'Cycle path separated from pedestrian path (alternative)',
    'ru': 'Велосипедная дорожка отделена от пешеходной (вариант 2)'
  },
  {
    'image': 'images/UK_traffic_sign_956.svg',
    'name': 'Road shared by cyclists and pedestrians',
    'ru': 'Дорога, используемая велосипедистами и пешеходами'
  },
  {
    'image': 'images/UK_traffic_sign_953.svg',
    'name': 'Road shared by bicycles and buses',
    'ru': 'Дорога, используемая велосипедами и автобусами'
  },
  {
    'image': 'images/UK_traffic_sign_951.svg',
    'name': 'No bicycles allowed',
    'ru': 'Запрещено движение велосипедов'
  },
  {
    'image': 'images/UK_traffic_sign_950.svg',
    'name': 'Road with special measures for cyclists',
    'ru': 'Дорога с особыми мерами для велосипедистов'
  },
  {
    'image': 'images/UK_traffic_sign_879.svg',
    'name': 'Speed camera',
    'ru': 'Камера контроля скорости'
  },
  {
    'image': 'images/Roundabout_road_sign_in_Cyprus1.svg',
    'name': 'Roundabout to population centres and Turkish-occupied areas',
    'ru': 'Кольцо, ведущее к населенным пунктам и оккупированным территориям'
  },
  {
    'image': 'images/Warning_sign_in_Cyprus.png',
    'name': 'Stop — Turkish occupied area',
    'ru': 'Стоп — оккупированная территория'
  }
];
