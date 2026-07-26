window.ScenarioData = {
	rawData: "",
	rawErrors: "",

	menuTree: [
	    {
	        "label": "Menu1",
	        "action": "",
	        "children": [
	            {
	                "label": "MỞ MÁY NGOẠI TRƯỜNG",
	                "action": "KT_Nguon_MD"
	            },
	            {
	                "label": "Kiểm tra khả năng hoạt động của các hệ thống bằng nguồn điện Ắc quy",
	                "action": "KT_Nguon_AQ"
	            }
	        ]
	    },
	    {
	        "label": "Menu2",
	        "action": "",
	        "children": [
	            {
	                "label": "Kiểm tra khả năng hoạt động của các hệ thống trước khi khởi động",
	                "action": "KT_Truoc_KD"
	            },
	            {
	                "label": "Khởi động động cơ",
	                "action": "KT_Truoc_KD"
	            }
	        ]
	    },
	    {
	        "label": "Menu3",
	        "action": "",
	        "children": [
	            {
	                "label": "Khởi động động cơ",
	                "action": "KD_DC"
	            },
	            {
	                "label": "Giới thiệu",
	                "action": "Gioi_Thieu"
	            },
	            {
	                "label": "Giới thiệu 1",
	                "action": "Gioi_Thieu"
	            },
	            {
	                "label": "Giới thiệu 2",
	                "action": "KD_DC"
	            }
	        ]
	    },
	    {
	        "label": "Xử lý bất trắc động cơ trái",
	        "action": "",
	        "children": [
	            {
	                "label": "Kẹt rô-to cao áp ĐC Trái",
	                "action": "PAN_01_KET_CAO_AP"
	            },
	            {
	                "label": "Kẹt rô-to thấp áp ĐC Trái",
	                "action": "PAN_02_KET_THAP_AP"
	            },
	            {
	                "label": "Không tăng nhiệt độ khí xả T4 ĐC Trái",
	                "action": "PAN_03_KO_TANG_NHIET"
	            },
	            {
	                "label": "Mất áp suất dầu nhờn ĐC Trái",
	                "action": "PAN_04_MAT_AP_SUAT_DAU"
	            },
	            {
	                "label": "Không ngắt van BTC khi khởi động ĐC Trái",
	                "action": "PAN_05_KO_NGAT_BTC"
	            },
	            {
	                "label": "Quá nhiệt độ khởi động T4 ĐC Trái",
	                "action": "PAN_06_QUA_NHIET_700"
	            },
	            {
	                "label": "Treo chu trình khởi động ĐC Trái",
	                "action": "PAN_07_TREO_KHOI_DONG"
	            },
	            {
	                "label": "Báo cháy buồng động cơ Trái (POJAR)",
	                "action": "PAN_08_BAO_CHAY_POJAR"
	            }
	        ]
	    },
	    {
	        "label": "Xử lý bất trắc động cơ phái",
	        "action": "",
	        "children": [
	            {
	                "label": "Kẹt rô-to cao áp ĐC Phải",
	                "action": "PAN_01_KET_CAO_AP_PHAI"
	            },
	            {
	                "label": "Kẹt rô-to thấp áp ĐC Phải",
	                "action": "PAN_02_KET_THAP_AP_PHAI"
	            },
	            {
	                "label": "Không tăng nhiệt độ khí xả T4 ĐC Phải",
	                "action": "PAN_03_KO_TANG_NHIET_PHAI"
	            },
	            {
	                "label": "Mất áp suất dầu nhờn ĐC Phải",
	                "action": "PAN_04_MAT_AP_SUAT_DAU_PHAI"
	            },
	            {
	                "label": "Không ngắt van BTC khi khởi động ĐC Phải",
	                "action": "PAN_05_KO_NGAT_BTC_PHAI"
	            },
	            {
	                "label": "Quá nhiệt độ khởi động T4 ĐC Phải",
	                "action": "PAN_06_QUA_NHIET_700_PHAI"
	            },
	            {
	                "label": "Treo chu trình khởi động ĐC Phải",
	                "action": "PAN_07_TREO_KHOI_DONG_PHAI"
	            },
	            {
	                "label": "Báo cháy buồng động cơ Phải (POJAR)",
	                "action": "PAN_08_BAO_CHAY_POJAR_PHAI"
	            }
	        ]
	    },
	    {
	        "label": "Menu6",
	        "action": "",
	        "children": [
	            {
	                "label": "Đập lửa / Sửa chữa / Hủy toàn bộ lỗi",
	                "action": "RESET_PAN"
	            }
	        ]
	    }
	],

	lessonNames: {
		"KT_Nguon_MD": "MỞ MÁY NGOẠI TRƯỜNG",
		"KT_Nguon_AQ": "Kiểm tra khả năng hoạt động của các hệ thống bằng nguồn điện Ắc quy",
		"KT_Truoc_KD": "Khởi động động cơ",
		"KD_DC": "Giới thiệu 2",
		"Gioi_Thieu": "Giới thiệu 1",
		"PAN_01_KET_CAO_AP": "Kẹt rô-to cao áp ĐC Trái",
		"PAN_02_KET_THAP_AP": "Kẹt rô-to thấp áp ĐC Trái",
		"PAN_03_KO_TANG_NHIET": "Không tăng nhiệt độ khí xả T4 ĐC Trái",
		"PAN_04_MAT_AP_SUAT_DAU": "Mất áp suất dầu nhờn ĐC Trái",
		"PAN_05_KO_NGAT_BTC": "Không ngắt van BTC khi khởi động ĐC Trái",
		"PAN_06_QUA_NHIET_700": "Quá nhiệt độ khởi động T4 ĐC Trái",
		"PAN_07_TREO_KHOI_DONG": "Treo chu trình khởi động ĐC Trái",
		"PAN_08_BAO_CHAY_POJAR": "Báo cháy buồng động cơ Trái (POJAR)",
		"PAN_01_KET_CAO_AP_PHAI": "Kẹt rô-to cao áp ĐC Phải",
		"PAN_02_KET_THAP_AP_PHAI": "Kẹt rô-to thấp áp ĐC Phải",
		"PAN_03_KO_TANG_NHIET_PHAI": "Không tăng nhiệt độ khí xả T4 ĐC Phải",
		"PAN_04_MAT_AP_SUAT_DAU_PHAI": "Mất áp suất dầu nhờn ĐC Phải",
		"PAN_05_KO_NGAT_BTC_PHAI": "Không ngắt van BTC khi khởi động ĐC Phải",
		"PAN_06_QUA_NHIET_700_PHAI": "Quá nhiệt độ khởi động T4 ĐC Phải",
		"PAN_07_TREO_KHOI_DONG_PHAI": "Treo chu trình khởi động ĐC Phải",
		"PAN_08_BAO_CHAY_POJAR_PHAI": "Báo cháy buồng động cơ Phải (POJAR)",
		"RESET_PAN": "Đập lửa / Sửa chữa / Hủy toàn bộ lỗi"
	},

	initData: function() {
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG | MỞ MÁY NGOẠI TRƯỜNG |  |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.1.1 | Kiểm tra khả năng hoạt động của các hệ thống trên máy bay khi sử dụng nguồn điện sân bay: | Выполнить проверку работоспособности бортовых систем при питании от аэродромного источника энергии: |  |  | \n";
		this.rawData += "KT_Nguon_MD | nguonNangLuong.congTacNguon.akum_lev.1.2 | Bật công tắc АККУМ ЛЕВ (ẮC QUY TRÁI); | включить выключатель АККУМ ЛЕВ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | nguonNangLuong.congTacNguon.akum_prav.1.3 | Bật công tắc АККУМ ПРАВ (ẮC QUY PHẢI); | включить выключатель АККУМ ПРАВ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.1.4 | Kiểm tra sự hiển thị của Màn hình chỉ thị đa năng ở cả hai buồng lái | проконтролировать индикацию на МФЦИ обеих кабин мнемокадров: |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.1.5 | Trên màn hình bên trái hiển thị khung hình Kiểm tra trước khi bay ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ; | на левом ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhPhai.1.6 | Trên màn hình bên phải hiển thị khung hình КИСС ТИПОВОЙ; | на правом КИСС ТИПОВОЙ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.1.7 | Trên màn hình ở giữa hiển thị khung hình КИСС СЭС; | на среднем КИСС СЭС; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.1.8 | Kiểm tra liên lạc vô tuyến qua thiết bị liên lạc nội bộ giữa các phi công ở buồng lái trước và buồng lái sau, với kỹ thuật trưởng máy bay và điều chỉnh âm lượng nếu cần thiết; | проверить радиосвязь по СПУ между летчиками в первой и второй кабинах, с техником самолета и при необходимости отрегулировать громкость; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.1.9 | Kiểm tra việc thiết lập kênh liên lạc vô tuyến với chỉ huy bay trên bảng điều khiển của СПУ; | проверить установку канала радиосвязи с руководителем полетов на объединенном пульте управления СПУ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.1.10 | Thực hiện tuần tự các hướng dẫn hiển thị trong cửa sổ 5 của khung hình ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ: | выполнить последовательно инструкции, предъявляемые в окне 5 мнемокадра ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ: |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.1.11 | ПРОВЕРЬ ЭКРАНЫ МФЦИ, УСТАНОВИ ЯРКОСТЬ (KIỂM TRA MÀN HÌNH МФЦИ, THIẾT LẬP ĐỘ SÁNG) | ПРОВЕРЬ ЭКРАНЫ МФЦИ,УСТАНОВИ ЯРКОСТЬ |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.kyhieuN.1.12 | Kiểm tra tình trạng hoạt động của các màn hình chỉ thị bằng sự hiện diện của biểu tượng N ở góc dưới bên phải màn hình; | проконтролировать исправность индикаторов по наличию символа N в правом нижнем углу экрана; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.kyhieuN.1.13 |  |  |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhPhai.kyhieuN.1.14 |  |  |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.3.1 | Thiết lập độ sáng cần thiết; | установить требуемую яркость; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.btn_dvig.3.2 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.3.3 | ПРОВЕРЬ СЭС (KIỂM TRA HỆ THỐNG ĐIỆN) | ПРОВЕРЬ СЭС |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.3.4 | Kiểm tra điện áp nguồn điện trên khung hình КИСС СЭС | по индикации на мнемокадре СЭС проверить соответствие напряжения электропитания установленным значениям и состояние СЭС; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.btn_dvig.3.5 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.3.6 | Kiểm tra sự thay đổi hiển thị trên màn hình МФЦИ ở giữa từ khung hình КИСС СЭС sang khung hình КИСС ДВИГАТЕЛЬ. | проконтролировать смену индикации на среднем МФЦИ мнемокадра КИСС СЭС на мнемокадр КИСС ДВИГАТЕЛЬ. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.3.7 | ПРОВЕРЬ ЛАМПЫ САС (KIỂM TRA CÁC ĐÈN BÁO KHẨN CẤP) | ПРОВЕРЬ ЛАМПЫ САС |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.kontron_lamp.3.8 | Nhấn nút КОНТРОЛЬ ЛАМП (KIỂM TRA ĐÈN) | нажать кнопку КОНТРОЛЬ ЛАМП на правой стороне приборной доски; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.nextG.3.9 | Đánh giá độ sáng của các đèn báo khẩn cấp; | оценить свечение ламп САС; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.btn_dvig.3.10 | Nhấn nút ДА; | нажать кнопку ДА; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.4.1 | ПРОВЕРЬ РИ (KIỂM TRA THÔNG THOẠI) | ПРОВЕРЬ РИ |  |  | \n";
		this.rawData += "KT_Nguon_MD | left_panel.ri.4.2 | Nhấn nút РИ trên bảng điều khiển đài vô tuyến; | нажать кнопку РИ на пульте управления радиостанцией; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.4.3 | Nghe thông báo РЕЧЕВОЙ ИНФОРМАТОР ИСПРАВЕН (HỆ THỐNG THÔNG THOẠI HOẠT ĐỘNG TỐT); | прослушать сообщение РЕЧЕВОЙ ИНФОРМАТОР ИСПРАВЕН; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.btn_dvig.4.4 | Nhấn nút ДА. | нажать кнопку ДА. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.4.6 | ПРОВЕРЬ ВНУТРИКАБИННОЕ ОСВЕЩЕНИЕ (KIỂM TRA CHIẾU SÁNG TRONG BUỒNG LÁI) | ПРОВЕРЬВНУТРИКАБИННОЕ ОСВЕЩЕНИЕ |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.4.7 | – Thực hiện kiểm tra bằng mắt thường hệ thống chiếu sáng trong buồng lái; | – выполнить визуальную проверку внутрикабинного освещения; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.btn_dvig.4.8 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.4.9 | ПРОВЕРЬ ИНДИКАТОР ПУИ (KIỂM TRA MÀN HÌNH CHỈ THỊ PUI) | ПРОВЕРЬИНДИКАТОР ПУИ |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.4.10 | – Kiểm tra để đảm bảo trên ПУИ không có thông báo НЕТ ИНФОРМАЦИИ (KHÔNG CÓ THÔNG TIN); | – проконтролировать отсутствие на ПУИ сообщения НЕТ ИНФОРМАЦИИ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.pui.yark.5.1 | – Cài đặt độ sáng theo yêu cầu; | – установить требуемую яркость; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.btn_dvig.5.2 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.5.3 | ПРОВЕРЬ ИНДИКАТОР ИЛС (KIỂM TRA MÀN HÌNH CHỈ THỊ KÍNH NGẮM) | ПРОВЕРЬИНДИКАТОР ИЛС |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.btn_dvig.5.4 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.5.5 | Khi hoàn thành kiểm tra này, trên màn hình МФЦИ giữa, khung hình КИСС ДВИГ sẽ thay đổi thành khung hình НАЧАЛЬНЫЕ ДАННЫЕ (DỮ LIỆU BAN ĐẦU). | По окончанию выполнения данной проверки на среднем МФЦИ мнемокадр КИСС ДВИГ меняется на мнемокадр НАЧАЛЬНЫЕ ДАННЫЕ (рис. 4). |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.5.6 | ВВЕДИ НАЧАЛЬНЫЕ ДАННЫЕ ВКЛЮЧИ ВЫСТАВКУ БИНС УСТАНОВИ (NHẬP DỮ LIỆU BAN ĐẦU BẬT CĂN CHỈNH BINS) | ВВЕДИ НАЧАЛЬНЫЕ ДАННЫЕВКЛЮЧИ ВЫСТАВКУ БИНСУСТАНОВИ |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.5.7 | – Nhập (kiểm tra) các dữ liệu ban đầu và dữ liệu cài đặt; | – ввести (проконтролировать) начальные и установочные данные; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.btn_dvig.5.8 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.5.9 | ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ THOÁT HIỂM) | 10. ВЫБЕРИ РЕЖИМКАТАПУЛЬТИРОВАНИЯ |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.5.10 | Đồng thời với thông báo ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ trong cửa sổ số 5 sẽ hiển thị thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 2-Х КАБИН hoặc КАТАПУЛЬТИРОВАНИЕ ИЗ 1-Й КАБИНЫ (PHÓNG GHẾ CỨU HỘ TỪ BUỒNG LÁI TRƯỚC) tùy thuộc vào vị trí của công tắc КАТАПУЛЬТИРОВАНИЕ (PHÓNG GHẾ) trên bảng điều khiển ngang bên trái của buồng lái thứ hai dựa theo số lượng thành viên phi hành đoàn. | Одновременно с сообщением ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ в окне 5 индицируется сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 2-х КАБИН или КАТАПУЛЬТИРОВАНИЕ ИЗ 1-й КАБИНЫ в зависимости от положения переключателя КАТАПУЛЬТИРОВАНИЕ на левом горизонтальном пульте второй кабины в зависимости от количества членов экипажа. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.6.1 | – Để xác nhận chọn phóng ghế từ hai buồng lái (khi có hai thành viên phi hành đoàn), cần nhấn nút ДА trên МФЦИ bên trái trong mỗi buồng lái, sau đó hướng dẫn ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ) và thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 2-Х КАБИН (PHÓNG GHẾ TỪ 2 BUỒNG LÁI) sẽ tắt; | для подтверждения выбора катапультирования из двух кабин (при двух членах экипажа) необходимо нажать кнопку ДА на левом МФЦИ в каждой кабине, после чего инструкция ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ и сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 2-х КАБИН погаснут; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.6.2 | – Để xác nhận chọn phóng ghế từ buồng lái thứ nhất (khi có một thành viên phi hành đoàn), cần nhấn nút ДА trên МФЦИ bên trái trong buồng lái thứ nhất, sau đó hướng dẫn ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ (CHỌN CHẾ ĐỘ PHÓNG GHẾ) và thông báo КАТАПУЛЬТИРОВАНИЕ ИЗ 1-Й КАБИНЫ (PHÓNG GHẾ CỨU HỘ TỪ BUỒNG LÁI 1) sẽ tắt. | – для подтверждения выбора катапультирования из первой кабины (при одном члене экипажа) необходимо нажать кнопку ДА на левом МФЦИ в первой кабине, после чего инструкция ВЫБЕРИ РЕЖИМ КАТАПУЛЬТИРОВАНИЯ и сообщение КАТАПУЛЬТИРОВАНИЕ ИЗ 1-й КАБИНЫ погаснут. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.6.3 | КОНТРОЛЬ КСАП (KIỂM TRA HỆ THỐNG SÁT THƯƠNG HÀNG KHÔNG) | КОНТРОЛЬ КСАП |  |  | \n";
		this.rawData += "KT_Nguon_MD | right_panel.congTacThanhPhai.kiem_tra_ksap.6.4 | – Nhấc nắp bảo vệ nút ấn thoát hiểm. | ‒ поднять защитную крышку КОНТРОЛЬ КСАП |  |  | \n";
		this.rawData += "KT_Nguon_MD | right_panel.congTacThanhPhai.kontpksap.6.5 | – Nhấn nút КОНТРОЛЬ КСАП trên thành phải của buồng lái thứ nhất. Nếu hệ thống КСАП hoạt động tốt, hướng dẫn trong cửa sổ số 5 ВЫПОЛНИ КОНТРОЛЬ КСАП sẽ thay đổi thành thông báo ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП (MẠCH ĐIỆN KSAP TỐT – BẬT NGUỒN KSAP); | ‒ нажать переключатель КОНТРОЛЬ КСАП расположенный на правом горизонтальном пульте первой кабины. При исправности системы КСАП инструкция в окне 5 ВЫПОЛНИ КОНТРОЛЬ КСАП меняется на сообщение ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП: ЭЛЕКТРОЦЕПИ КСАП ИСПРАВНЫ – ВКЛЮЧИ ПИТАНИЕ КСАП |  |  | \n";
		this.rawData += "KT_Nguon_MD | right_panel.congTacThanhPhai.cong_tac_ksap.6.6 | – Đưa công tắc bật thoát hiểm về vị trí ВКЛ (BẬT), khi đó trong cửa sổ số 5 sẽ xuất hiện một trong các thông báo sau: УСТАНОВИ МАССУ, МАЛАЯ МАССА МЕНЕЕ 75 кг; УСТАНОВИ МАССУ, СРЕДНЯЯ МАССА от 75 до 100 кг; УСТАНОВИ МАССУ, БОЛЬШАЯ МАССА СВЫШЕ 100 кг; | – установить выключатель на правом горизонтальном пульте КСАП ВКЛ–ОТКЛ в положение ВКЛ, при этом в окне 5 высвечивается одно из сообщений: УСТАНОВИ МАССУ, МАЛАЯ МАССА МЕНЕЕ 75 кг УСТАНОВИ МАССУ, СРЕДНЯЯ МАССА от 75 до 100 кг УСТАНОВИ МАССУ, БОЛЬШАЯ МАССА СВЫШЕ 100 кг |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhTrai.btn_dvig.6.7 |  |  |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.6.8 | – Đặt công tắc МАССА (TRỌNG LƯỢNG) trên ghế phóng cứu hộ vào vị trí tương ứng với trọng lượng cần thiết; | – установить переключатель МАССА на катапультном кресле в положение, соответствующее необходимому весу; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.6.9 | – Nhấn nút ДА. | – нажать кнопку ДА. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.6.10 | 1. Để khởi động động cơ, lần lượt bật các công tắc sau: | 1. Получив разрешение на запуск включить выключатели на правом вертикальном борту: |  |  | \n";
		this.rawData += "KT_Nguon_MD | nguonNangLuong.congTacNguon.generator_lev.7.1 | – ГЕНЕРАТОР ЛЕВ (MÁY PHÁT ĐIỆN TRÁI); | ‒ ГЕНЕРАТОР ЛЕВ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | nguonNangLuong.congTacNguon.generator_prav.7.2 | – ГЕНЕРАТОР ПРАВ (MÁY PHÁT ĐIỆN PHẢI); | ‒ ГЕНЕРАТОР ПРАВ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | nguonNangLuong.congTacNguon.topl_nasos.7.3 | – ТОПЛ НАСОСЫ (BƠM NHIÊN LIỆU); | ‒ ТОПЛ НАСОСЫ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | nguonNangLuong.congTacNguon.kislorod_oxy.7.4 | – КИСЛОРОД (OXY). | ‒ КИСЛОРОД. |  |  | \n";
		this.rawData += "KT_Nguon_MD | rud_LeftRight.rud_right.7.5 | 2. Đưa tay dầu của cả hai động cơ vào vị trí Ga nhỏ. | 2. Установить РУД обоих двигателей на упор МГ. |  |  | \n";
		this.rawData += "KT_Nguon_MD | tombol_menu.tombol_1 |  |  |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.7.6 | Sau khi đưa tay dầu của cả 2 động cơ lên vị trí Ga nhỏ, trên màn hình МФЦИ trong cửa sổ số 1 sẽ xuất hiện các thông báo ЛЕВЫЙ К ЗАПУСКУ ГОТОВ, ПРАВЫЙ К ЗАПУСКУ ГОТОВ, và thông báo К ЗАПУСКУ ДВИГАТЕЛЕЙ НЕ ГОТОВ sẽ tắt. | После установки левого и правого РУД на упор МГ на экране МФЦИ в окне 1 появляются сообщения ЛЕВЫЙ К ЗАПУСКУ ГОТОВ, ПРАВЫЙ К ЗАПУСКУ ГОТОВ, а сообщение К ЗАПУСКУ ДВИГАТЕЛЕЙ НЕ ГОТОВ гаснет. |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.small_panel_right.napAnKD_DC.7.7 | 3.    Nhấn nút ЗАПУСК НА ЗЕМЛЕ (KHỞI ĐỘNG Ở MẶT ĐẤT), lúc này quá trình khởi động ВСУ sẽ diễn ra. | 3. Нажать кнопку ЗАПУСК НА ЗЕМЛЕ, при этом происходит запуск ВСУ. |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.small_panel_right.nutAnKD_VCY_2DC.7.8 |  |  |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.7.9 | 4.    Trong quá trình khởi động ВСУ trên khung hiển thị sơ đồ КИСС ДВИГ, cần kiểm tra: | 4. В процессе запуска ВСУ на мнемокадре КИСС ДВИГ контролировать: |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.chedo.7.10 | – Chỉ thị dòng chữ ЗАПУСК (KHỞI ĐỘNG) phía trên đồng hồ chỉ thị các thông số của ВСУ; | – индикацию надписи ЗАПУСК над индикатором параметров ВСУ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt2.8.1 | – Sự kích hoạt của bộ đếm thời gian khởi động ВСУ; | – включение счетчика времени запуска ВСУ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.8.2 | – Sự gia tăng của vòng quay và nhiệt độ khí cháy; | – рост оборотов и температуры выходящих газов; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt2.8.3 | – Thời gian khởi động ВСУ (không quá 40 giây). | – время запуска ВСУ (не более 40 с). |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt3.8.4 | – Nhiệt độ khí cháy không được vượt quá 800 °C | При запуске ВСУ контролировать максимальную температуру выходящих газов – не должна превышать 800 °C |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt1.8.5 | – Vòng quay rô-to không được vượt quá 109 %. | Mаксимальные обороты ротора – не должны превышать 109 %. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.8.6 | Nếu vượt quá các giá trị tối đa của nhiệt độ khí cháy hoặc vòng quay rô-to trong quá trình khởi động, hãy dừng việc khởi động bằng cách nhấn nút ОСТАНОВ trên bảng điều khiển. | При превышении в процессе запуска ВСУ максимальных значений температуры выходящих газов или оборотов ротора прекратить запуск ВСУ нажатием кнопки ОСТАНОВ на панели ВСУ. |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.chedo.8.7 | Khi kết thúc quá trình khởi động ВСУ, dòng chữ ЗАПУСК phía sẽ thay đổi thành dòng chữ РЕЖИМ (CHẾ ĐỘ). | По окончании запуска ВСУ надпись ЗАПУСК над индикатором параметров ВСУ меняется на надпись РЕЖИМ. |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt3.8.9 | – Nhiệt độ khí cháy tối đa không quá 720 °C; | – максимальная температура выходящих газов не более 720 °C; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoBCY.timer_txt1.8.10 | – Số vòng quay rô-to tối đa không quá 109 %. | – максимальные обороты ротора не более 109 %. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.9.1 | 5.    15 giây sau khi ВСУ đạt đến chế độ làm việc, động cơ bên trái sẽ tự động bắt đầu khởi động. | 5. Через 15 с после выхода ВСУ на режим автоматически начинается запуск левого двигателя. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.9.2 | 6.    15 giây sau khi động cơ bên trái đạt đến chế độ Ga nhỏ, động cơ bên phải sẽ tự động bắt đầu khởi động. | 6. Через 15 с после выхода левого двигателя на режим МГ автоматически начинается запуск правого двигателя. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.9.3 | Trong quá trình khởi động động cơ, trên khung hiển thị sơ đồ КИСС ДВИГ, cần kiểm tra: | Во время запуска двигателя, на мнемокадре КИСС ДВИГ контролировать: |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.9.4 | – Xuất hiện thông báo ИДЕТ ЗАПУСК ЛЕВОГО (ПРАВОГО) ДВИГАТЕЛЯ (ĐANG KHỞI ĐỘNG ĐỘNG CƠ TRÁI (PHẢI)); | – индикацию в поле БАСК сообщения ИДЕТ ЗАПУСК ЛЕВОГО (ПРАВОГО) ДВИГАТЕЛЯ; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.thoiGian_txt.9.5 | – Sự kích hoạt của bộ đếm thời gian khởi động động cơ; | – включение счетчика времени запуска двигателя; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.denKD.9.6 | – Tín hiệu báo trạng thái khởi động động cơ (màu vàng); | – индикацию желтого сигнализатора работы системы запуска; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.den_VTC_Trai.9.7 | – Tín hiếu báo mở van ВТС (màu xanh da trời); | – индикацию синего сигнализатора открытия створки ВТС; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimCaoAp.9.8 | – Sự gia tăng vòng quay của rô-to áp suất cao (nРВД); | – нарастание оборотов ротора высокого давления (nРВД); |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimThapAp.9.9 | – Sự gia tăng vòng quay của rô-to áp suất thấp (nРНД) khi nРВД = 20 %; | – нарастание оборотов ротора низкого давления (nРНД) при nРВД ≈ 20 %; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.ap_suat_nd_lev.9.10 | – Sự gia tăng áp suất dầu ở đầu nhờn ở cửa vào động cơ; | – увеличение давления масла на входе в двигатель; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.10.1 | – Sau 15 giây kể từ khi bắt đầu khởi động, sự gia tăng nhiệt độ khí cháy, giá trị này không được vượt quá 700 °C; | – через 15 с от начала запуска нарастание температуры выходящих газов, которая не должна превышать 700 °C; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.den_VTC_Trai.10.2 | – Sự ngắt ВТС và đóng cửa van ВТС dựa trên việc tắt đèn báo ВТС khi nРВД ≤ 55 %; | – отключение ВТС и закрытие створки ВТС по погасанию синего сигнализатора ВТС при nРВД ≤ 55 %; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.thoiGian_txt.10.3 | – Thời gian khởi động động cơ tối đa, không được quá 60 giây; | – максимальное время запуска двигателя, которое должно быть не более 60 с; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.denKD.10.4 | – Việc tắt tín hiệu báo trạng thái khởi động động cơ, sau khi động cơ đạt đến chế độ ga nhỏ. | – погасание индикации желтого сигнала работы системы запуска, после выхода двигателя на режим малого газа. |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhPhai.cua_hut_khi_Trai.10.5 | 7.    Kiểm tra, qua khung hình КИСС ТИПОВОЙ, việc mở cửa hút khí phía trên khi nРВД > 35 %. | 7. Проконтролировать, по мнемокадру КИСС ТИПОВОЙ, перекладку створки воздухозаборника на верхний вход при nРВД > 35 %. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.10.6 | 8.    15 giây sau khi động cơ trái đạt đến chế độ ga nhỏ, động cơ phải sẽ tự động bắt đầu khởi động. | 8. Через 15 с после выхода левого двигателя на режим МГ автоматически начинается запуск правого двигателя. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.10.7 | 9.    Sau khi khởi động, kiểm tra các thông số hoạt động của động cơ ở chế độ ga nhỏ: | 9. После запуска проконтролировать параметры работы двигателей на МГ: |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.kimThapAp.10.8 | – Vòng quay rô to thấp áp nРНД = 28…35 %; | – nРНД = 28…35 %; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.vongQuay_txt.10.9 | – Vòng quay rô to cao áp nРВД ≥ 60 %; | – nРВД ≥ 60 %; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.dongHoVongQuayTrai.dongHoNhietDo.nhietDo_txt.10.10 | – Nhiệt độ khí cháy không vượt quá 700 °C; | – температура выходящих газов – не более 700 °C; |  |  | \n";
		this.rawData += "KT_Nguon_MD | manHinhChinh.manHinhGiua.ap_suat_nd_lev.11.1 | – Áp suất dầu không nhỏ hơn 2,0 kg/cm². | – давление масла – не менее 2,0 кг/см². |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.11.2 | CHÚ Ý: Dừng việc khởi động động cơ bằng cách đưa tay dầu về vị trí vào vị trí СТО, nếu trong quá trình khởi động động cơ: | ВНИМАНИЕ: Запуск двигателя прекратить постановкой РУД в положение СТОП, если в процессе запуска двигателя: |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.11.3 | – Rô-to áp suất cao không quay sau 5 giây kể từ khi bắt đầu khởi động; | – отсутствует раскрутка ротора высокого давления через 5 с после начала запуска; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.11.4 | – Rô-to áp suất thấp không quay khi vòng quay của rô-to áp suất cao từ 23 % trở lên; | – отсутствует раскрутка ротора низкого давления при оборотах ротора высокого давления 23 % и более; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.11.5 | – Nhiệt độ khí xả không tăng sau 30 giây kể từ khi bắt đầu khởi động; | – отсутствует рост температуры выходящих газов через 30 с после начала запуска; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.11.6 | – Không có áp suất dầu nhờn ở đầu vào động cơ sau 30 giây kể từ khi bắt đầu khởi động; | – отсутствует давление масла на входе в двигатель через 30 с после начала запуска; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.11.7 | – Khi vòng quay rô to cao áp nРВД > 55 % mà không có sự ngắt ВТС và đèn báo ВТС tiếp tục hiển thị màu xanh; | – при nРВД > 55 % нет отключения ВТС и продолжается индицироваться синим цветом сигнализатор ВТС; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.11.8 | – Nhiệt độ khí cháy có xu hướng vượt quá 700 °C; | – температура выходящих газов стремится превысить 700 °C; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.11.9 | – Sau 60 giây kể từ khi bắt đầu khởi động, động cơ vẫn chưa đạt đến chế độ ga nhỏ; | – через 60 с после начала запуска двигатель не вышел на режим малого газа; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.11.10 | – Xuất hiện tín hiệu báo cháy; | – срабатывание сигнализации ПОЖАР; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.12.1 | – Chỉ thị trong cửa sổ БАСК các thông báo liên quan đến các hỏng hóc có thể xảy ra của động cơ; | – индикация в окне БАСК сообщений связанных с возможными отказами двигателя; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.12.2 | – Các thông số hoạt động của động cơ không tương ứng với chế độ không tải nhỏ. | – несоответствие параметров работы двигателя режиму малого газа. |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.12.3 | Việc khởi động lại động cơ được phép thực hiện nếu nguyên nhân dừng khởi động là: | Повторный запуск двигателя разрешается производить, если причиной прекращения запуска было: |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.12.4 | – Không điểm lửa được nhiên liệu trong buồng đốt; | – не воспламенение топлива в камере сгорания; |  |  | \n";
		this.rawData += "KT_Nguon_MD | mc_Subtitle.nextG.12.5 | – Nhiệt độ khí cháy có xu hướng vượt quá 700 °C; | – стремление температуры выходящих газов превысить 700 °C; |  |  | \n";
		this.rawData += "KT_Nguon_AQ | nguonNangLuong.congTacNguon.akum_lev.1.1 | Tôi đã sửa |  |  |  | \n";
		this.rawData += "KT_Nguon_AQ | nguonNangLuong.congTacNguon.akum_prav.1.2 | Khi sử dụng nguồn từ ắc quy trên máy bay, điện sẽ được cấp cho các thiết bị tiêu thụ điện cấp 1, do đó màn hình МФЦИ ở giữa trong cả hai buồng lái sẽ không hoạt động cho đến khi máy phát điện của ВСУ được kết nối vào mạng điện máy bay. | При питании от бортовых аккумуляторов электропитание подается на потребители первой категории, поэтому средний МФЦИ в обеих кабинах не работает до момента подключения генератора ВСУ к бортовой сети. |  |  | \n";
		this.rawData += "KT_Nguon_AQ | nguonNangLuong.congTacNguon.generator_lev.1.3 | – Bật công tắc АККУМ ЛЕВ (ẮC QUY TRÁI); | – включить выключатель АККУМ ЛЕВ; |  |  | \n";
		this.rawData += "KT_Nguon_AQ | nguonNangLuong.congTacNguon.generator_prav.1.4 | – Kiểm tra màn hình МФЦИ bên trái hiển thị khung hình  – ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ (KIỂM TRA TRƯỚC KHI BAY) | – проконтролировать индикацию на МФЦИ обеих кабин мнемокадров:– на левом – ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ; |  |  | \n";
		this.rawData += "KT_Nguon_AQ | nguonNangLuong.congTacNguon.topl_nasos.1.6 | – Kiểm tra màn hình МФЦИ bên phải – КИСС ТИПОВОЙ; | – на правом – КИСС ТИПОВОЙ; |  |  | \n";
		this.rawData += "KT_Nguon_AQ | nguonNangLuong.congTacNguon.kislorod_oxy.1.7 | – Chuyển đổi chỉ thị trên màn hình МФЦИ bên phải từ khung hình КИСС ТИПОВОЙ sang khung hình КИСС СЭС; | – переключить индикацию на правом МФЦИ с мнемокадра КИСС ТИПОВОЙ на мнемокадр КИСС СЭС; |  |  | \n";
		this.rawData += "KT_Nguon_AQ | btn_next.1.8 | – Kiểm tra điện áp trong 5 giây, giá trị này phải không được nhỏ hơn 24 Vôn; | – проконтролировать в течение 5 с напряжение, которое должно быть не менее 24 В; |  |  | \n";
		this.rawData += "KT_Nguon_AQ | btn_next.1.9 | – Bật công tắc АККУМ ПРАВ (ẮC QUY PHẢI); | – включить выключатель АККУМ ПРАВ; |  |  | \n";
		this.rawData += "KT_Nguon_AQ | btn_next.1.10 | – Tắt công tắc АККУМ ЛЕВ (ẮC QUY TRÁI); | – отключить выключатель АККУМ ЛЕВ; |  |  | \n";
		this.rawData += "KT_Nguon_AQ | btn_next.1.11 | – Kiểm tra điện áp trong 5 giây, giá trị này phải không được nhỏ hơn 24 Vôn; | – проконтролировать в течение 5 с напряжение, которое должно быть не менее 24 В; |  |  | \n";
		this.rawData += "KT_Nguon_AQ | btn_yes.1.1 | – Bật công tắc АККУМ ЛЕВ (ẮC QUY TRÁI). | – включить выключатель АККУМ ЛЕВ. |  |  | \n";
		this.rawData += "KT_Nguon_AQ | btn_next.2.1 | Thời gian từ lúc bật các ắc quy cho đến khi khởi động ВСУphải ở mức tối thiểu (trong cửa sổ số 3 của khung hình ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ có hiển thị thang thời gian thực hiện quá trình kiểm tra trên mặt đất). | Время от момента включения аккумуляторов до запуска ВСУ должно быть минимальным (в окне 3 мнемокадра МФЦИ ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ индицируется шкала времени проведения наземного контроля). |  |  | \n";
		this.rawData += "KT_Nguon_AQ | btn_next.2.2 | – Thực hiện lần lượt các hướng dẫn được đưa ra trong cửa sổ số 5 của khung hình ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ, tương tự như quy trình kiểm tra khi được cấp điện từ nguồn điện sân bay. | – выполнить последовательно инструкции, предъявляемые в окне 5 мнемокадра ПРЕДПОЛЕТНЫЙ КОНТРОЛЬ, аналогично проверке при наличии питания от аэродромного источника энергии |  |  | \n";
		this.rawData += "Gioi_Thieu | mc_Subtitle.nextG | CHÀO MỪNG BẠN ĐẾN VỚI PHẦN GIỚI THIỆU PHẦN MỀM VÀ HỌC TẬP TRANG THIẾT BỊ BUỒNG LÁI. HÃY CLICK CHUỘT VÀO BIỂU TƯỢNG MÁY XANH ĐỂ SANG BƯỚC TIẾP THEO |  |  |  | \n";
		this.rawData += "Gioi_Thieu | mc_Subtitle.nextG.1.1 | Trước mặt các bạn là giao diện buồng lái trước của Máy bay Iak-130 |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh | Đây là bảng các thiết bị thành trước của buồng lái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | left_panel | Đây là thành trái của buồng lái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | right_panel | Đây là thành phải của buồng lái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | rud_LeftRight.rud_left | Đây là tay dầu điều khiển động cơ trái |  | 17.7 | 50 | \n";
		this.rawData += "Gioi_Thieu | rud_LeftRight.rud_right | Đây là tay dầu điều khiển động cơ phải |  | 32.4 | 65 | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong | Đây là bảng công tắc nguồn |  |  |  | \n";
		this.rawData += "Gioi_Thieu | dieuHuongT2 | Click vào đây để ẩn, hiện tay dầu |  |  |  | \n";
		this.rawData += "Gioi_Thieu | dieuHuongT1 | Click vào đây để ẩn, hiện thành trái buồng lái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | dieuHuongP1 | Click vào đây để ẩn, hiện thành phải buồng lái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | dieuHuongP2 | Click vào đây để ẩn, hiện bảng công tắc nguồn |  |  |  | \n";
		this.rawData += "Gioi_Thieu | nutMoDoThi | Click vào đây để mở đồ thị mở máy |  |  |  | \n";
		this.rawData += "Gioi_Thieu | huongDanMoMay | Đây là bảng thông tin hướng dẫn |  |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.akum_lev | Đây là công tắc bật/tắt Ắc quy Trái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.akum_prav | Đây là công tắc bật/tắt Ắc quy Phải |  |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.generator_lev | Đây là công tắc bật/tắt Máy phát điện Trái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.generator_prav | Đây là công tắc bật/tắt Máy phát điện Phải |  |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.generator_vcy | Đây là công tắc bật/tắt Máy phát điện ВСУ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.topl_nasos | Đây là công tắc bật/tắt Bơm nhiên liệu |  |  |  | \n";
		this.rawData += "Gioi_Thieu | nguonNangLuong.congTacNguon.kislorod_oxy | Đây là công tắc bật/tắt Nguồn Ô xy |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.rerum_zapus_lev | Đây là công tắc lựa chọn chế độ Khởi động của động cơ trái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.rerum_zapus_prav | Đây là công tắc lựa chọn chế độ Khởi động của động cơ Phải |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.napAnKD_DC | Đây là nắp đậy công tắc khởi động động cơ ở mặt đất |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.nutAnKD_DC | Đây là công tắc khởi động động cơ ở mặt đất |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.napAnKD_VCY | Đây là nắp đậy công tắc khởi động ВСУ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.nutAnKD_VCY | Đây là nút ấn khởi động ВСУ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.small_panel_right.nutTatMay_VCY | Đây là nút ấn tắt, tắt khẩn cấp ВСУ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhTrai | Đây là màn hình МФЦИ bên trái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua | Đây là màn hình МФЦИ ở giữa |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhPhai | Đây là màn hình МФЦИ bên phải |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_pil | Click vào đây để chuyển sang khung hình bay ПИЛОТАЖ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_nvg | Click vào đây để chuyển sang khung hình dẫn dường НАВИГАЦИЯ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_ito | Click vào đây để chuyển sang khung hình dẫn dường НАВИГАЦИЯ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_kiss | Click vào đây để chuyển sang khung hình КИСС ТОПОВОЙ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_dvig | Click vào đây để chuyển sang khung hình КИСС ДВИГАТЕЛЬ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_topl | Click vào đây để chuyển sang khung hình КИСС ТОПЛИВА |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_gidr | Click vào đây để chuyển sang khung hình КИСС ГИДР |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_cec | Click vào đây để chuyển sang khung hình КИСС СЭС |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_kcy | Click vào đây để chuyển sang khung hình КИСС КСУ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.manHinhGiua.btn_czo | Click vào đây để chuyển sang khung hình КИСС СЖО |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.denBaoHong_CDY | Đây là đèn báo hỏng hệ thống СДУ |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.denBaoHong_Gidr | Đây là đèn báo hỏng hiệ thống thủy lực ГИДР |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.pajar_kran_prav.pajar_lamp_prav | Đây là đèn báo cháy động cơ bên phải |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.pajar_kran_prav.pajar_kran_prav | Đây là đèn báo đóng khóa phòng hỏa động cơ bên phải |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.pajar_kran_lev.pajar_lamp_lev | Đây là đèn báo cháy động cơ bên trái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.pajar_kran_lev.pajar_kran_lev | Đây là đèn báo đóng khóa phòng hỏa động cơ bên trái |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.denBaoHongTapTrung | Đây là đèn báo hỏng tập trung |  |  |  | \n";
		this.rawData += "Gioi_Thieu | manHinhChinh.instance3.instance7 | Đây là cần thu/ thả càng |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.1.1 | Chỉ báo trạng thài hoạt động của ВСУ Hiển thị dưới dạng hình chữ nhật màu trắng với tên chế độ làm việc bên trong:ЗАПУСК (Khởi động) – màu vàng;РЕЖИМ (Đang hoạt động) – màu xanh lá;СТОП (Dừng) – màu đỏ. | Признак режима работы ВСУ в виде прямоугольника белого цвета с наименованием режима работы внутри:ЗАПУСК – желтого цветаРЕЖИМ – зеленого цветаСТОП – красного цвета |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.2.2 | Chỉ báo hệ thống thủy lực tăng cường. | Признак бустерной гидросистемы |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.3.3 | Chỉ báo hệ thống thủy lực chung và tăng cường Hiển thị dưới dạng thang đo (cột) màu xanh lục với vạch chỉ thị màu trắng. Giới hạn dưới là 110 kg/cm², giới hạn trên là 230 kg/cm². Các giá trị áp suất tới hạn trên và dưới được hiển thị bằng các hình tam giác màu đỏ. | Признак общей / бустерной гидросистемы индицируются в виде шкал (\"столбиков\") зеленого цвета с отсчетными индексами белого цвета. Нижняя граница 110 кгс/см2, верхняя 230 кгс/см2. Верхние и нижние предельные значения... отображаются в виде треугольников красного цвета. |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.4.4 | Chỉ báo thùng nhiên liệu phụ (thùng treo) Ký hiệu thùng nhiên liệu treo chỉ hiển thị khi trên máy bay thực tế có mang thùng dầu phụ. Việc tiêu thụ nhiên liệu được hiển thị bằng cách thay thế màu vàng bằng màu trắng. | Признак ПТБ. Подвесные топливные баки отображаются только при наличии на борту подвесных баков. Расход топлива индицируется путем замены желтого цвета на белый... |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.5.5 | Chỉ báo thùng nhiên liệu cánh | Признак крыльевых топливного бака |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.6.6 | Chỉ báo thùng nhiên liệu chính (thùng thân) Khi nhiên liệu tiêu hao tiêu thụ nhiên liệu ở mỗi thùng được hiển thị bằng cách thay thế màu vàng bằng màu trắng, theo đó phần màu vàng sẽ tụt dần xuống dưới. | Признак основного фюзеляжного топливного бака. Расход топлива в каждом баке индицируется путем замены желтого цвета на белый, при этом желтый цвет опускается вниз. |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.7.7 | Tổng lượng nhiên liệu còn lại hiển thị bằng bộ đếm 4 chữ số màu đen nằm bên trong ký hiệu thùng tiêu thụ. Khi có tín hiệu nhiên liệu ở mức khẩn cấp, ký hiệu thùng tiêu thụ sẽ nhấp nháy màu đỏ. | Суммарный остаток топлива индицируется в виде черырехразрядного счетчика черного цвета, расположенного внутри символа расходного бака. При наличии признака аварийного остатка символ индицируется красным цветом в проблесковом режиме. |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.8.8 | Chỉ báo thả cánh mũi ở góc 20° và 27° được hiển thị bằng các ký hiệu màu xanh lá nằm phía trên hình chiếu đôi cánh. | Признаки выхода носков крыла на 20° и на 27° индицируются в виде символов зеленого цвета, расположенных над силуэтом крыльев |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.9.9 | Chỉ báo thả cánh tà ở góc 20° và 40° (vị trí cất cánh và hạ cánh) được hiển thị bằng các hình chữ nhật màu xanh lục nằm phía dưới hình chiếu đôi cánh. | Признаки выхода закрылков на 20° и на 40° (взлетное и посадочное положение) индицируются в виде прямоугольников зеленого цвета, расположенных под силуэтом крыльев |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.10.10 | Chỉ báo thả tấm giảm tốc hiển thị dưới dạng hình chữ nhật màu xanh lục với chữ viết tắt ТЩ màu đen. | Признак выпуска тормозного щитка индицируется в виде прямоугольника зеленого цвета с аббревиатурой ТЩ черного цвета |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.11.11 | Chỉ báo nắp buồng lái đang mở hiển thị dưới dạng một ký hiệu màu đỏ. | Признак открытия фонаря индицируется в виде символа красного цвета |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.12.12 | Chỉ báo cửa hút khí phía trên đang mở hiển thị dưới dạng các hình chữ nhật màu xanh dương. | Признаки открытия воздухозаборников индицируются в виде прямоугольников синего цвета |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.13.13 | Đồng hồ vòng quay của rô to cao áp | Параметры оборотов двигателей |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.14.14 | Giá trị vòng quay của rô to cao áp | Счетчики и указатели числа оборотов двигателей |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.15.15 | Chỉ số nhiệt độ khí cháy sau tuabin của động cơ | Счетчики температуры исходящих газов двигателей |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.16.16 |  |  |  |  | \n";
		this.rawData += "Kiss_Tipovoi | mc_Subtitle.nextG.17.17 |  |  |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.1.1 | Đồng hồ vòng quay của ВСУ | Шкала оборотов ВСУ |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.2.2 | Đồng hồ nhiệt độ khí cháy của ВСУ | Шкала температуры исходящих газов ВСУ |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.3.3 | Đồng hồ vòng quay của động cơ | Шкала оборотов двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.4.4 | Tín hiệu báo trạng thái khởi động của động cơ | Сигнализатор состояния двигателя |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.5.5 | Chỉ số vòng quay rô to cao áp | Счетчики и указатели оборотов двигателей (Nвдпр) |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.6.6 | Kim chỉ vòng quay của rô to thấp áp | Указатели оборотов двигателей (Nндпр) |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.7.7 | Chỉ số nhiệt độ khí cháy sau tuabin của động cơ | Счетчики температуры исходящих газов двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.8.8 | Thang đo và vạch chỉ thị độ rung ổ đỡ động cơ | Шкалы и указатели вибрации опор двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.9.9 | Tín hiệu báo hóc khí động cơ | Сигнализаторы «помпажа» двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.10.10 | Chỉ báo chế độ làm việc của động cơ | Указатели режима работы двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.11.11 | Chỉ báo vị trí góc tay ga ga (РУД) | Указатели углового положения РУД |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.12.12 | Chỉ báo áp suất dầu nhờn | Счетчики величины давления масла двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.13.13 | Chỉ báo nhiệt động dầu nhờn ở cửa vào động cơ | Счетчики температуры масла на входах в двигатели |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.14.14 | Tín hiệu báo trạng thái hoạt động của tuabin khí khởi động ВТС | Сигнализаторы состояния ВТС двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.15.15 | Chỉ báo thời gian khởi động động cơ | Счетчики времени запуска двигателей |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.16.16 | Tín hiệu báo trạng thái hoạt động của ВСУ | Режим работы ВСУ |  |  | \n";
		this.rawData += "Kiss_Dvig | mc_Subtitle.nextG.17.17 | Chỉ báo thời gian khởi động của ВСУ | Счетчик времени запуска ВСУ |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.1.1 | Đồng hồ lượng dầu. Ở phần bên phải của màn hình hiển thị các thang đo dạng cột (tuyến tính) của đồng hồ đo nhiên liệu \"T\" và lượng nhiên liệu dự trữ tổng cộng tính toán \"P\"màu trắng. Phía trên các thang đo có dòng chữ \"X 1000 кг\" (x1000 kg). Отсчет текущих значений топлива производится по подвижным столбикам желтого цвета. В нижней части каждой шкалы индицируется величина аварийного остатка топлива (180 кг) в виде вертикальных столбиков красного цвета. | Линейная шкала топливомера. В правой части мнемокадра индицируются линейные шкалы топливомера \"Т\" и расчетного суммарного запаса топлива \"Р\" белого цвета. Над шкалами индицируется надпись \"Х 1000 кг\". Việc đọc các giá trị nhiên liệu hiện tại được thực hiện thông qua các cột di động màu vàng. Ở phần dưới của mỗi thang đo hiển thị mức nhiên liệu còn lại khẩn cấp (180 kg) dưới dạng các cột dọc màu đỏ. |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.2.2 | Đồng hồ tiêu hao | Линейная шкала расчетного значения топлива |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.3.3 | Tổng lượng nhiên liệu trên máy bay. Phía trên các ký hiệu thùng nhiên liệu hiển thị một bộ đếm bốn chữ số của đồng hồ đo nhiên liệu màu trắng Gт кг. Bước nhảy của bộ đếm là 5 kg. Chỉ số của bộ đếm Gт кг tương ứng với chỉ số của thang đo \"P\" và chỉ số của bộ đếm được hiển thị trên nền thùng nhiên liệu tiêu thụ ở màn hình КИСС (chuẩn). | Счетчик суммарной массы топлива. Над символами топливных баков индицируется четырех разрядный счетчик топливомера белого цвета Gт кг. Дискретность счетчика – 5 кг. Показания счетчика Gт кг соответствуют показаниям шкалы \"Р\" и показаниям счетчика, индицируемого на фоне расходного бака на мнемокадре КИСС (типовой). |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.4.4 | Thùng nhiên liệu chính (thùng thân). Ký hiệu các thùng nhiên liệu chính và tiêu thụ được hiển thị dưới dạng hình chữ nhật (bo tròn góc), thùng nhiên liệu trên cánh – dạng hình tứ giác (bo tròn góc), thùng nhiên liệu treo ngoài – dạng hình bầu dục. | Символ основного фюзеляжного бака. Символы основного и расходного топливных баков отображаются в виде прямоугольников (со скругленными углами), крыльевых топливных баков – в виде четырехугольников (со скругленными углами), подвесных топливных баков – в виде овалов. |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.5.5 | Thùng nhiên liệu cánh | Символы крыльевых баков |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.6.6 | Thùng nhiên liệu tiêu hao. Trên nền thùng nhiên liệu tiêu hao có hiển thị một đường ngang màu đỏ, vị trí của nó tương ứng với mức nhiên liệu khẩn cấp còn lại 180 kg. | Символ расходного топливного бака. На фоне расходного бака отображается красная горизонтальная линия, расположение которой соответствует аварийному остатку топлива 180 кг. |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.7.7 | Thùng dầu phụ (thùng treo). Các thùng nhiên liệu treo ngoài, với tên gọi ЛПТБ (Thùng trái), ППТБ (Thùng phải) và các đường ống nối thùng treo với thùng chính, chỉ hiển thị khi máy bay thực tế có mang theo thùng treo ngoài. | Символы подвесных топливных баков.Подвесные топливные баки, наименованием ЛПТБ, ППТБ и трубопроводы, соединяющие ПТБ с основным баком, отображаются только при наличии на борту подвесных баков. |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.8.8 | Bơm nhiên liệu khởi động. Phía dưới các thùng nhiên liệu hiển thị các ký hiệu mô tả trạng thái của bơm nhiên liệu khởi động và bơm chính, trạng thái các van khóa và dấu hiệu hoạt động của động cơ: | Признак работы пускового топливного насоса. Ниже топливных баков индицируются символы, характеризующие состояние пускового и основного топливных насосов, состояние перекрывных кранов и признаки работы двигателей: |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.9.9 | Bơm nhiên liệu chính. Trạng thái của bơm nhiên liệu khởi động và bơm chính được hiển thị bằng màu sắc: đang hoạt động – màu xanh lục; hỏng hóc – màu đỏ; không hoạt động – màu của nền màn hình. | Признак работы основного топливного насоса. Состояние пускового и основного топливных насосов отображается цветом: признак работы – зеленый; отказ – красный; нерабочее состояние – цвет фона |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.10.10 | Van ngắt nhiên liệu (khóa phòng hỏa). Van khóa đang mở – màu xanh lục; Van khóa đang đóng – màu của nền màn hình; Trạng thái không xác định – màu đỏ, ở chế độ nhấp nháy. | Признаки состояния перекрывных кранов. Состояние перекрывных кранов отображается цветом: перекрывной кран открыт – зеленый; перекрывной кран закрыт – цвет фона; неопределенное состояние – красный, в проблесковом режиме. |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.11.11 | Tín hiệu báo hoạt động của động cơ. Dấu hiệu hoạt động của động cơ được hiển thị bằng màu sắc: Động cơ đang hoạt động – màu xanh lá; Hỏng hóc – màu đỏ; Động cơ không hoạt động – màu của nền màn hình. | Признаки работы двигателей. Признаки работы двигателей отображаются цветом: признак работы – зеленый; отказ – красный; нерабочее состояние – цвет фона |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.12.12 |  |  |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.13.13 |  |  |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.14.14 |  |  |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.15.15 |  |  |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.16.16 |  |  |  |  | \n";
		this.rawData += "Kiss_Topl | mc_Subtitle.nextG.17.17 |  |  |  |  | \n";

		this.rawErrors += "Thao tác sai, vui lòng thử lại. | Неверное действие, попробуйте снова.\n";
		this.rawErrors += "Bạn đã ấn nhầm nút, hãy kiểm tra kỹ. | Вы нажали не ту кнопку, проверьте еще раз.\n";
		this.rawErrors += "Chưa đúng, hãy nhìn vào vòng tròn gợi ý. | Ошибка! Обратите внимание на подсказку.\n";
	}
};

window.ScenarioData.initData();
