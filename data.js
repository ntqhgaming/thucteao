const questions = {
    question_2: {
        origin_question: [
            {
        "id": 1,
        "title": "Câu 1: Mô hình tường lửa ISA là viết tắt của?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Microsoft International Security and Acceleration", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Manager Internet Security and Association", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Microsoft Internet Security and Acceleration", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Microsoft Internet System and Acknowledgement", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 2,
        "title": "Câu 2: Khi cấu hình cho dịch vụ DNS mục Reverse lookup Zone là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Vùng ánh xạ từ địa chỉ IP thành địa chỉ tên miền", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Vùng ánh xạ từ địa chỉ tên miền thành địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chứa các zone không sử dụng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Chứa toàn bộ zone của DNS", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 3,
        "title": "Câu 3: Thông tin về DNS được ghi ở đâu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Window\\system32\\DNS", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Win/bin/etc/DNS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Unix/etc/bin", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "system32\\etc\\DNS", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 4,
        "title": "Câu 4: DNS chủ yếu hoạt động trên mô hình mạng nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Client/Server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Peer to peer", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Server-based", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 5,
        "title": "Câu 5: Hệ thống phân giải tên miền DNS ra đời năm nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "1984", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "1981", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "1985", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "1995", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 6,
        "title": "Câu 6: Trường hợp nào sau đây là sai đối với DNS Root server?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Không nhất thiết phải có DNS root server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Root DNS database được duy trì bởi người có thẩm quyền", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Root server được sử dụng để định tuyến các yêu cầu tới các server tiếp theo", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các Root server cung cấp các địa chỉ để các server domain kết hợp với root đó", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 7,
        "title": "Câu 7: DNS name root được quản lý bởi tổ chức nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "ICANN", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "INIC", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "ISO", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "ICAN", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 8,
        "title": "Câu 8: Ký hiệu mặc định của Root name là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "(.)", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Không có", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "(*)", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "(\\)", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 9,
        "title": "Câu 9: Chọn phát biểu đúng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Địa chỉ IP của máy trạm do người dùng tự cài đặt", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Địa chỉ IP của máy trạm do máy chủ tự động cấp phát", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Các phương án trên đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 10,
        "title": "Câu 10: Truy vấn đệ quy là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Truy vấn giữa DNS server và DNS server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Không được sử dụng trong DNS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là một truy vấn trong quá trình cấp phát IP động", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Truy vấn giữa Resolver và DNS server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 11,
        "title": "Câu 11: Thành phần của DNS gồm?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "DNS server, các Zone, các Resolver và các Resource Record", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DNS server, các Zone, các Resolver, client và các Resource Record", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "DNS server, các Zone, và các Resource Record", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "DNS server, các Resolver, client và các Resource Record", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 12,
        "title": "Câu 12: Khi bạn dùng lệnh nslookup, nếu thấy báo có địa chỉ IP nhưng tên Server là Unknow có nghĩa là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "DNS server đã cài đặt chưa thành công", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Chưa tìm được DNS server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Máy của bạn không kết nối mạng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Dùng lệnh sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 13,
        "title": "Câu 13: Khi cấu hình cho dịch vụ DNS mục Forward lookup Zone là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Vùng ánh xạ từ địa chỉ tên miền thành địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Vùng ánh xạ từ địa chỉ IP thành địa chỉ tên miền", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chứa các zone không sử dụng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Chứa toàn bộ zone của DNS", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 14,
        "title": "Câu 14: Hệ thống tên miền DNS được cài đặt nhằm để làm gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Dễ nhớ địa chỉ máy tính hơn", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Định danh 1 máy tính trên mạng cục bộ", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Để thay thế địa chỉ IP, máy tính sẽ không cần dùng địa chỉ IP nữa", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Giúp Server cấp phát địa chỉ IP cho client", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 15,
        "title": "Câu 15: Khi dùng lệnh Ping www.google.com bạn không thấy reply. Nguyên nhân là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Do bạn chưa khai báo địa chỉ server DNS cho máy bạn", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Trong cơ sở dữ liệu của DNS server không có tên máy này", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Do máy có tên miền này không cùng Netid với máy bạn", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 16,
        "title": "Câu 16: Truy vấn tương tác là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Truy vấn giữa Resolver và DNS server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Không được sử dụng trong DNS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Truy vấn giữa DNS server và DNS server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 17,
        "title": "Câu 17: Nếu một DNS server không phân giải được tên miền trong cơ sở dữ liệu cục bộ nó sẽ làm gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Dừng phân giải ngay lập tức", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DNS server sẽ tiếp tục gửi truy vấn tới các DNS server khác ở mức cao hơn", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Gửi trả thông báo không tồn tại tên miền đó cho Resolver", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "DNS server sẽ tiếp tục gửi truy vấn tới các DNS server khác ở mức cao hơn, để name server này sẽ tự gửi trả địa chỉ cho các Resolver", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 18,
        "title": "Câu 18: Resource Records là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Nơi lưu giữ các Top level name", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Bản ghi nhật ký của các DNS client khi tham gia vào truy vấn đệ quy", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là các Root server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Là danh sách cơ sở dữ liệu được sử dụng để trả lời các truy vấn từ DNS client", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 19,
        "title": "Câu 19: Theo bạn nếu không có DNS thì sẽ ra sao?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Phải nhớ địa chỉ IP khi gõ vào một trình duyệt", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Không thể truy cập Internet", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chỉ sử dụng mạng Lan", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Phải ghi tên miền ra danh bạ như sử dụng danh bạ điện thoại", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 20,
        "title": "Câu 20: Một DNS domain namespace gồm?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Root name, Top-Level Domain, Second-level-domain, zone, Subdomain, host", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Root name, Top-Level Domain, zone, Subdomain, host", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Root name, Top-Level Domain, Second-level-domain, Subdomain", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Root name, Top-Level Domain, Second-level-domain, Subdomain, host", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 21,
        "title": "Câu 21: Bạn có thể tạo ra máy loại DNS zone?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 22,
        "title": "Câu 22: Truy vấn tới 1 name Server là công việc của?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Resolver", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Root hint", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Zone", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 23,
        "title": "Câu 23: ISA là sản phẩm của hãng nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Bekerly", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Apple", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Microsoft", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Novell", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 24,
        "title": "Câu 24: ISA server 2006 có mấy phiên bản?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 25,
        "title": "Câu 25: Microsoft ISA Server 2006 có khả năng bảo vệ như thế nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Bảo vệ toàn hệ thống mạng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Bảo vệ một máy duy nhất có cài đặt ISA", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Bảo vệ Web server và Mail server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tuỳ vào người quản trị cấu hình ISA", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 26,
        "title": "Câu 26: ISA server tối thiểu cần bao nhiêu card mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 27,
        "title": "Câu 27: ISA client nào không thể chứng thực được User?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "SecureNAT client", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Firewall client", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Web Proxy client", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các ý trên đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 28,
        "title": "Câu 28: ISA client nào phải sử dụng cài Software?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "SecureNAT client", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Firewall client", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Web Proxy client", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các ý trên", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 29,
        "title": "Câu 29: Firewall client có thể cài được trên môi trường nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Window", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "MSDOS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Unix", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các hệ điều hành", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 30,
        "title": "Câu 30: Web proxy trên ISA chạy port là bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "80", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "8080", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "25", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "8098", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 31,
        "title": "Câu 31: Mô hình ISA nào cho phép ta có thể cài đặt nhiều ISA server trong mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Edge Firewall", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3-Leg Perimeter", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Front/Back Firewall", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 32,
        "title": "Câu 32: Khi muốn xin lại IP address, DHCP client sẽ gửi lại gói tin DHCP REQUEST trực tiếp cho DHCP server mà nó đã xin ban đầu với dạng truyền gói tin nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Unicast", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Broadcast", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Multicast", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 33,
        "title": "Câu 33: ISA client chỉ có thể cài trên hệ điều hành Window?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Web Proxy client", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "SecureNAT client", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Firewall client", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các ý trên", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 34,
        "title": "Câu 34: Theo thời gian mặc định của DHCP server thì mỗi IP lease chỉ được 8 ngày. Sau khoảng thời gian bao lâu thì DHCP client phải tự động gửi một DHCP request trực tiếp tới DHCP server mà nó xin ban đầu để xin lại IP address?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "4 ngày (sau 50% thời gian xin cấp phát IP)", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "8 ngày (sau khi hết thời gian xin cấp phát IP)", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Không phải gửi lại gói tin xin cấp lại, vẫn hoạt động bình thường với IP đã được cấp", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không thể xin cấp lại, DHCP server chỉ cấp phát 1 lần duy nhất", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 35,
        "title": "Câu 35: Cổng mặc định của Remote desktop là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "8098", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3389", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "8080", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "2120", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 36,
        "title": "Câu 36: Cổng mặc định của Remote web brower là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "8098", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3389", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "8080", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "2120", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 37,
        "title": "Câu 37: Nếu sau 50% thời gian hoạt động DHCP client gửi DHCP request tới DHCP server đã cấp phát cho nó địa chỉ IP, nhưng DHCP đó đã ngưng hoạt động, thì sẽ xảy ra vấn đề gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "DHCP vẫn hoạt động bình thường đến hết 87,5 thời gian Lease mặc định thì xin DHCP khác cấp phát địa chỉ IP cho mình", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DHCP client đó không thể kết nối vào mạng nữa", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "DHCP client vẫn hoạt động bình thường cho đến hết thời gian Lease mặc định ban đầu thì ngừng hoạt động, không thể xin cấp phát IP một lần nữa", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "DHCP vẫn hoạt động bình thường đến hết thời gian Lease mặc định thì xin DHCP khác cấp phát địa chỉ IP cho mình", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 38,
        "title": "Câu 38: Thông tin người dùng được lưu trong tệp nào tại Domain controller server khi sử dụng dịch vụ Active Directory?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "SAM", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Gpedit.msc", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "NTDS.DIT", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "SYSTEM32", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 39,
        "title": "Câu 39: Tệp SAM viết tắt của?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Security Accounts Manager", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Set Accounts Manager", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Security Accounts Management", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Security Access Manager", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 40,
        "title": "Câu 40: Bạn quản trị mạng trong công ty A, tất cả các máy kiểm soát miền là Window server 2003, bạn sẽ phải cài đặt dịch vụ gì để có thể cấu hình một máy thành Web server?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "IIS", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DNS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "DHCP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Active directory", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 41,
        "title": "Câu 41: Chọn phát biểu đúng về tài khoản cục bộ được tạo trên máy trạm?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Có trên Domain controller", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Đăng nhập được trên máy cục bộ và máy chủ", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Quản lý việc đăng nhập", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không thể truy nhập tài nguyên miền", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 42,
        "title": "Câu 42: Muốn cài đặt dịch vụ AD (Active Directory) ta sử dụng lệnh nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Start run dcpromo", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khởi động tệp active directory.exe", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Không cần cài đặt vì đã tự động chạy khi cài Window", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Start run gpedit.msc", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 43,
        "title": "Câu 43: Chọn phát biểu đúng nhất về Domain controller là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Chỉ lưu thông tin DNS", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Được sử dụng để quản lý miền", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Một máy trạm được quyền truy xuất tài nguyên miền", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Được dùng để lưu thông tin account cục bộ", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 44,
        "title": "Câu 44: Chọn phát biểu đúng về OU (Organizational Unit)?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Là một thành phần trong cấu trúc AD", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Một nhóm địa chỉ IP để cấp phát động", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là đối tượng để làm tăng số miền (domain)", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "OU không thể thay thế cho Subdomain", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 45,
        "title": "Câu 45: Thế nào được gọi là một Domain?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Gồm các máy hoạt động riêng lẻ", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Một vùng dùng chung cơ sở dữ liệu", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Một vùng làm việc với hạn chế về tài nguyên", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Chỉ gồm các server được cài đặt hệ điều hành Window server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 46,
        "title": "Câu 46: Exchange là sản phẩm của hãng nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Bekerly", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Apple", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Microsoft", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Novell", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 47,
        "title": "Câu 47: Khi cài đặt xong DNS, có mấy thành phần trong DNS?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "4", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "5", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 48,
        "title": "Câu 48: Khi cài đặt xong DNS, những thành phần nào có trong DNS?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Forward Lookup Zones, Reverse Lookup Zones, Event Viewer", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Forward Lookup Server, Reverse Lookup Server, Event Viewer", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Forward Lookup Zones, Reverse Lookup Zones, Event Lookup Zones", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Forward Lookup Server, Reverse Lookup Server, Event Lookup Server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 49,
        "title": "Câu 49: Chức năng của Event Viewer trong DNS là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Đây là trình theo dõi sự kiện nhật ký dịch vụ DNS, nó sẽ lưu trữ các thông tin về cảnh giác alert, cảnh báo warnings, lỗi errors", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Chứa tất cả các Zone thuận của dịch vụ DNS, zone này được lưu tại máy DNS Server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chứa tất cả các Zone nghịch của dịch vụ DNS, zone này được lưu tại máy DNS Server.", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 50,
        "title": "Câu 50: Chức năng của Forward Lookup Zones trong DNS là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Đây là trình theo dõi sự kiện nhật ký dịch vụ DNS, nó sẽ lưu trữ các thông tin về cảnh giác alert, cảnh báo warnings, lỗi errors", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Chứa tất cả các Zone thuận của dịch vụ DNS, zone này được lưu tại máy DNS Server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chứa tất cả các Zone nghịch của dịch vụ DNS, zone này được lưu tại máy DNS Server.", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 51,
        "title": "Câu 51: Chức năng của Reverse Lookup Zones trong DNS là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Đây là trình theo dõi sự kiện nhật ký dịch vụ DNS, nó sẽ lưu trữ các thông tin về cảnh giác alert, cảnh báo warnings, lỗi errors", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Chứa tất cả các Zone thuận của dịch vụ DNS, zone này được lưu tại máy DNS Server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chứa tất cả các Zone nghịch của dịch vụ DNS, zone này được lưu tại máy DNS Server.", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 52,
        "title": "Câu 52: Chính sách mật khẩu Password Policies, chính sách này?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Cho phép bạn qui định chiều dài ngắn nhất của mật khẩu, độ phức tạp của mật khẩu…", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cho phép bạn hạn chế tấn công thông qua hình thức logon từ xa", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cho phép bạn giám sát và ghi nhận các sự kiện xảy ra trong hệ thống, trên các đối tượng cũng như đối với các người dùng.", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 53,
        "title": "Câu 53: Chính sách khóa tài khoản Account Lockout Policy, chính sách này?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Cho phép bạn qui định chiều dài ngắn nhất của mật khẩu, độ phức tạp của mật khẩu…", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cho phép bạn hạn chế tấn công thông qua hình thức logon từ xa", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cho phép bạn giám sát và ghi nhận các sự kiện xảy ra trong hệ thống, trên các đối tượng cũng như đối với các người dùng.", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 54,
        "title": "Câu 54: Chính sách kiểm tra Audit Policies, chính sách này?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Cho phép bạn qui định chiều dài ngắn nhất của mật khẩu, độ phức tạp của mật khẩu…", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cho phép bạn hạn chế tấn công thông qua hình thức logon từ xa", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cho phép bạn giám sát và ghi nhận các sự kiện xảy ra trong hệ thống, trên các đối tượng cũng như đối với các người dùng.", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 55,
        "title": "Câu 55: Chọn phát biểu đúng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Chính sách nhóm chỉ xuất hiện trên miền Active Directory. Chính sách nhóm làm được nhiều điều hơn chính sách hệ thống.", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Chính sách nhóm tự động hủy bỏ tác dụng khi được gỡ bỏ. Chính sách nhóm được áp dụng thường xuyên hơn chính sách hệ thống.", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Có nhiều mức độ để gán chính sách nhóm này cho người từng nhóm hoặc từng nhóm từng đối tượng.", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 56,
        "title": "Câu 1: Group policy trên Hệ điều hành Window là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Lưu giữ thông tin về tài khoản và mật khẩu đã tạo trên máy cục bộ", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Lưu giữ thông tin về quyền chia sẻ và bảo mật dữ liệu", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Dùng để tạo chính sách nhóm và là tệp ứng dụng được tạo ra bởi công cụ MMC", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Thông tin về tài khoản người dùng quản lý trên máy chủ", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 57,
        "title": "Câu 2: Microsoft Exchange Server 2003 tồn tại mấy phiên bản chính?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 58,
        "title": "Câu 3: Muốn cài đặt thêm một máy chủ Mail exchange server trong hệ thống mạng mà bạn đang quản trị, bạn chọn tuỳ chọn nào khi cài đặt Microsoft Exchange server 2003?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Install Exchange 2003 on additions Server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Deploy the First Exchange 2003 Server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Additions mail Server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Deploy the additions Exchange 2003 Server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 59,
        "title": "Câu 4: Giao thức nào cho phép Web server và web client có thể giao tiếp với nhau qua dịch vụ WWW?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "POP3", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "HTML", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "SMTP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "HTTP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 60,
        "title": "Câu 5: ứng dụng máy khách loại nào được hỗ trợ bởi Exchange Server 2003?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "SMTP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Microsoft word 2003", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Các ứng dụng Internet e-mail", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Microsoft", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 61,
        "title": "Câu 6: Cổng hoạt động TCP của dịch vụ Web là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "21", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "80", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "81", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "8080", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 62,
        "title": "Câu 7: Một máy chủ Domain controler phải được cài đặt?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Active directory", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DHCP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "DNS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "WINS", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 63,
        "title": "Câu 8: Để hệ thống AD (Active directory) hoạt động được thì trong Domain phải có?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Một máy làm DNS server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Một máy làm DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Hoạt động bình thường không cần phụ thuộc vào dịch vụ nào khác", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Chỉ cần cài đặt dịch vụ AD trên máy Domain controller", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 64,
        "title": "Câu 9: Công việc quản trị chính của DC (Domain Controller) là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Account người dùng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DNS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Quản lý địa chỉ cấp phát IP động", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đáp án trên", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 65,
        "title": "Câu 10: Một Domain có thể có bao nhiêu DC (Domain Controller)?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Chỉ được một DC", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tối đa là hai DC", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Có thể cài đặt nhiều DC", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không thể cài đặt DC", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 66,
        "title": "Câu 11: Active Directory được xây dựng dựa trên?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "DNS và LDAP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DHCP và DNS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "MMC", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "LDAP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 67,
        "title": "Câu 12: Công cụ nào có chức năng tạo và quản lý các đối tượng cơ bản của hệ thống Active Directory?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Active Directory User and Computer", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Computer Management", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Active Directory Domains and Trusts", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Active Directory Sites and Services", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 68,
        "title": "Câu 13: Cấu trúc vật lý của AD gồm?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Domain controller và site", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Object, Organization Unit, Domain, Domain tree ,System: tree, Forest", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Domain controller, Domain tree, Forest, Object, Organization Unit", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Domain controller, Domain tree, Forest và site", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 69,
        "title": "Câu 14: Cấu trúc logic của AD gồm?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Domain controller và site", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Domain controller, Domain tree, Forest, Object, Organization Unit", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Object, Organization Unit, Domain, Domain tree, Forest", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Domain controller, Domain tree, Forest và site", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 70,
        "title": "Câu 15: Một nút trong DNS name space quy định tối đa bao nhiêu ký tự?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "63", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "256", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "60", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 71,
        "title": "Câu 16: Bạn tạo tài khoản trên máy trạm, thì thông tin tài khoản cục bộ sẽ tồn tại ở đâu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Máy chủ", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Máy trạm", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Máy chủ và máy trạm", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 72,
        "title": "Câu 17: Lợi ích khi sử dụng dịch vụ active directory?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Quản trị tài khoản và tài nguyên tập trung, cần ít người quản trị", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cho phép người sử dụng tự log on", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cung cấp một server chứng thực", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 73,
        "title": "Câu 18: Tệp NTDS.DIT là viết tắt của?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "New technology directory service. Directory Information Tree", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Network technology directory service. Directory Information Tree", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "New technology domain service. Directory Internet Tree", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "New technology directory service. Directory Information Training", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 74,
        "title": "Câu 19: Firewall phần mềm hoạt động trên tầng nào trong mô hình TCP/IP?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Tầng ứng dụng và Tầng mạng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tầng mạng và Tầng vận chuyển", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tầng vật lý", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tầng vận chuyển", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 75,
        "title": "Câu 20: Nếu sau 50% thời gian hoạt động DHCP client gửi DHCP Request tới DHCP server đã cấp phát cho nó địa chỉ IP, nhưng DHCP server đó đã ngưng hoạt động, thì sẽ xảy ra vấn đề gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "DHCP client đó không thể kết nối vào mạng nữa", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DHCP client vẫn hoạt động bình thường cho đến hết thời gian Lease mặc định ban đầu thì ngừng hoạt động, không thể xin cấp phát IP một lần nữa", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "DHCP vẫn hoạt động bình thường đến hết khoảng 87,5% thời gian Lease mặc định thì xin DHCP server khác cấp phát địa chỉ IP cho mình", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "DHCP vẫn hoạt động bình thường đến hết khoảng 60% thời gian Lease mặc định thì xin DHCP server khác cấp phát địa chỉ IP cho mình", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 76,
        "title": "Câu 21: Firewall phần cứng hoạt động trên tầng nào trong mô hình TCP/IP?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Tầng ứng dụng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tầng mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tầng vận chuyển", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tầng Vật lý", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 77,
        "title": "Câu 22: Bạn đang muốn ngưng dịch vụ DNS trên máy chủ, bạn sẽ chọn lệnh nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Net stop dns", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Net start dns", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Stop dns", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Start dns", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 78,
        "title": "Câu 23: Bạn đang muốn khởi động dịch vụ DNS trên máy chủ, bạn sẽ chọn lệnh nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Net stop dns", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Net start dns", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Stop dns", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Start dns", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 79,
        "title": "Câu 24: Có mấy loại ISA client?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 80,
        "title": "Câu 25: DHCP server phụ trách công việc gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Cấp phát và thu hồi IP động cho, từ các máy DHCP client", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Quản lý tệp tin trong mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cấp phát địa chỉ gửi Email", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Quản lý và chia sẻ tài nguyên trên mạng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 81,
        "title": "Câu 26: SMTP viết tắt của cụm từ nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Simple Mail Transfer Protocol", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Simplex Mail Transfer Protocol", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Source Mail Transfer Protocol", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Simple Message Transfer Protocol", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 82,
        "title": "Câu 27: Tường lửa là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Một hệ thống được xây dựng để đảm bảo an ninh cho công ty", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Một hệ thống có mục đích chống lại sự xâm nhập trái phép từ Internet", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Một hệ thống báo cháy", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Một hệ thống bảo vệ thông tin", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 83,
        "title": "Câu 28: Trong các mô hình hoạt động của thư điện tử, mô hình Internet cho phép các máy chủ phục vụ thư kết nối Internet và chuyển thư cho nhau qua giao thức?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "SMTP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "POP3", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "FTP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "HTTP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 84,
        "title": "Câu 29: Những biện pháp gì để bảo vệ an toàn thông tin trên mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Tường lửa", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Phần mềm virus", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Mã hoá dữ liệu", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 85,
        "title": "Câu 30: Tại sao phải duy trì an ninh mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Bảo vệ tài nguyên máy tính", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Đảm bảo danh tiếng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "An toàn dữ liệu", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 86,
        "title": "Câu 31: Mô hình ISA nào có độ bảo mật cao nhưng chi phí đầu tư ban đầu rất lớn?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Edge Firewall", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3-Leg Perimeter", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Front/Back Firewall", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các phương án trên", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 87,
        "title": "Câu 32: Bạn là một quản trị viên, trên Server bạn đã bật chức năng Remote desktop, vậy tại máy trạm bạn phải gõ lệnh gì tiếp theo khi đã chọn Start- Run để thực hiện điều khiển server?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "MSTSC", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "GPEDIT.MSC", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "NSLOOKUP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "CMD", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 88,
        "title": "Câu 33: IIS 6.0 cung cấp những công cụ gì để hỗ trợ và quản lý Website?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "IIS Manager", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Remote Administration (HTML) Tool", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Command –line administration scipts", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 89,
        "title": "Câu 34: HTTP viết tắt của cụm từ nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Hexa Transfer Protocol", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Hypertext Transfer Program", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Hypertext Transfer Protocol", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Header Transfer Protocol", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 90,
        "title": "Câu 35: DNS name space quy định tối đa bao nhiêu ký tự?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "63", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "256", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "60", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 91,
        "title": "Câu 36: Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 25Mbps, yêu cầu cho bộ nhớ máy chủ để cài đặt được ISA server là bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "512Mb", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "1Gb", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "2Gb", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4Gb", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 92,
        "title": "Câu 37: Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 7.5Mbps, yêu cầu cho bộ nhớ máy chủ để cài đặt được ISA server là bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "512Mb", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "1Gb", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "2Gb", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4Gb", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 93,
        "title": "Câu 38: Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 90Mbps, cho phép số VPN đồng thời kết nối là bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "850", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "2000", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "150", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "700", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 94,
        "title": "Câu 39: Những thông số có thể lọc được của một packet, khi bạn áp dụng tường lửa có chức năng Packet filtering?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Địa chỉ IP nguồn", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Địa chỉ Ip đích", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cổng TCP nguồn và đích", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 95,
        "title": "Câu 40: Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 45Mbps, yêu cầu cho bộ nhớ máy chủ để cài đặt được ISA server là bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "512Mb", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "1Gb", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "2Gb", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4Gb", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 96,
        "title": "Câu 41: Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 45Mbps, cho phép số VPN đồng thời kết nối là bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "2000", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "700", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "850", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "150", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 97,
        "title": "Câu 42: Hệ điều hành Window Server 2003 gồm mấy phiên bản?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 98,
        "title": "Câu 43: Khi bạn sử dụng công cụ quản trị MMC, bạn sẽ cài đặt chế độ làm việc nào để cho phép người sử dụng có quyền truy cập đầy đủ tới các chức năng trong MMC nhưng không thể thêm bớt các Snap-in?",
        "thumb": "1.jpg",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Author mode", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "User mode-limited access multiple window", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "User mode-limited access single window", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "User mode – full access", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 99,
        "title": "Câu 44: Khi bạn sử dụng công cụ quản trị MMC, bạn sẽ cài đặt chế độ làm việc nào để cho phép người sử dụng chỉ có quyền truy cập các chức năng trong MMC đã được lưu có thể tạo cửa sổ mới nhưng không thể đóng cửa sổ hiện tại?",
        "thumb": "1.jpg",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Author mode", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "User mode – full access", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "User mode-limited access multiple window", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "User mode-limited access single window", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 100,
        "title": "Câu 45: Khi bạn sử dụng công cụ quản trị MMC, bạn sẽ cài đặt chế độ làm việc nào để cho phép người sử dụng chỉ có quyền truy cập các chức năng trong MMC đã được lưu nhưng không thể mở cửa sổ mới?",
        "thumb": "1.jpg",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Author mode", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "User mode – full access", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "User mode-limited access multiple window", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "User mode-limited access single window", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 101,
        "title": "Câu 46: Công cụ quản trị MMC viết tắt của?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Microsoft Management Console", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Microsoft Management Control", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Management Module Control", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Microsoft Manager Console", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 102,
        "title": "Câu 47: Bạn đang làm việc tại một công ty, công ty bạn đang thiết lập một hệ thống tường lửa ISA, công ty đã đăng ký dịch vụ internet có băng thông là 90Mbps, yêu cầu cho bộ nhớ máy chủ để cài đặt được ISA server là bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "1Gb", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "2Gb", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "4Gb", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "512Mb", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 103,
        "title": "Câu 48: Trước khi cài đặt dịch DHCP trên Window 2003 server, cần thiết lập các thành phần nào sau?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Địa chỉ IP tĩnh, subnet mask và default gateway", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Subnet mask và DNS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Địa chỉ IP tĩnh và DNS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Subnet mask và default gateway", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 104,
        "title": "Câu 49: Thiết lập địa chỉ IP tĩnh chỉ dùng khi nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Quy mô hoạt động mạng nhỏ", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khó thiết lập IP động", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không có DHCP server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 105,
        "title": "Câu 50: Sau khi tạo Scope trong việc cấu hình dịch vụ DHCP, làm thế nào để hiệu chỉnh địa chỉ mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Hiệu chỉnh bình thường bằng cách nhập địa chỉ mạng mới", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Xoá và tạo lại Scope", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Hiệu chỉnh subnetmask", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không thể thay đổi được", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 106,
        "title": "Câu 51: Lấy thông tin cấu hình TCP/IP từ DHCP server ta dùng lệnh nào trên máy client?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Ipconfig/renew", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Ipconfig/all", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Ipconfig/release", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Ping", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 107,
        "title": "Câu 52: Một client phải gửi một gói tin Broadcast nào để yêu cầu DHCP server cấp phát IP cho mình?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "DHCP OFFER", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DHCP ACK", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "DHCP DISCOVER", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không cần gửi", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 108,
        "title": "Câu 53: Khi nào Client phải gửi gói tin DHCP Request tới DHCP server?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Khi Client chấp nhận lời đề nghị cấp phát IP DHCP OFFER từ một DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khi client yêu cầu cấp phát IP từ một DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Khi client chấp nhận lời đề nghị cấp phát Ip DHCP ACK từ một DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 109,
        "title": "Câu 54: Lệnh Ipconfig/release dùng để làm gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Lấy thông tin TCP/IP cho DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Trả thông tin TCP/IP cho DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Khi muốn xem cấu hình trên máy client", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 110,
        "title": "Câu 55: Giao thức DHCP được phát triển bởi tổ chức nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "IETF", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "IEEE", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "INIC", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "IETT", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 111,
        "title": "Câu 56: DHCP server gửi gói tin DHCP ACK cho client để làm gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Không chấp nhận cấp phát địa chỉ IP cho client đó", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Chấp nhận lời đề nghị cấp phát Ip cho client", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tất cả đều sai", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Xác nhận lời đề nghị cấp phát địa chỉ IP của Client từ DHCP server đó", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 112,
        "title": "Câu 57: Khi cài đặt cấu hình DHCP thì mục IP Address Range là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Khoảng địa chỉ cấp cho client", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khoảng địa chỉ không cấp cho Client", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Địa chỉ riêng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Để nhập địa chỉ mạng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 113,
        "title": "Câu 58: Khi cài đặt cấu hình DHCP thì mục Add Exclusion là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Khoảng địa chỉ cấp cho client", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khoảng địa chỉ để dành", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Địa chỉ riêng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Để nhập địa chỉ mạng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 114,
        "title": "Câu 59: Trong gói tin DHCP OFFER được gửi từ DHCP server tới client gồm những nội dung gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Địa chỉ IP của DHCP server đó", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Địa chỉ IP sẽ cấp phát cho client", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Defaul gateway", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 115,
        "title": "Câu 60: Tên miền nào là thuộc các trung tâm hỗ trợ về mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": ".NET", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": ".MIL", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": ".EDU", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": ".COM", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": ".INT", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 116,
        "title": "Câu 61: Tên miền nào là thuộc các tổ chức quân sự?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": ".NET", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": ".MIL", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": ".EDU", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": ".COM", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": ".INT", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 117,
        "title": "Câu 62: Tên miền nào là thuộc các tổ chức giáo dục?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": ".NET", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": ".MIL", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": ".EDU", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": ".COM", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": ".INT", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 118,
        "title": "Câu 63: Tên miền nào là thuộc các tổ chức thương mại?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": ".NET", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": ".MIL", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": ".EDU", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": ".COM", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": ".INT", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 119,
        "title": "Câu 64: Tên miền nào thuộc các tổ chức được thành lập bởi các hiệp ước quốc tế?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 4,
        "results": [
            {"idResult": 0, "value": ".NET", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": ".MIL", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": ".EDU", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": ".COM", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": ".INT", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 120,
        "title": "Câu 65: LDAP là viết tắt của?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Lightweight Directory Access Protocol", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Light Directory Access Program", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Light Directory Access Protocol", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Lightweight Directory Access program", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 121,
        "title": "Câu 66: Giao thức nào được hỗ trợ bởi Exchange 2003 để các ứng dụng nhận Mail có thể truy xuất mail trên máy chủ Exchange và tải các thư điện tử này về?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "POP3", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "PPTP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "BITS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "SMTP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 122,
        "title": "Câu 67: Trên máy client, bạn không thể kết nối vào mạng Internet. Bạn dùng lệnh PING vẫn có thể kết nối tới địa chỉ 172.28.220.1, đây là địa chỉ của một máy chủ ở trong mạng của bạn. Bạn thử PING tên một Website và nhận được thông báo lỗi sau PING REQUEST COULD NOT FIND HOST. Bạn nên kiểm tra gì trước?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Card mạng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Switch", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Máy chủ DNS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Máy chủ DHCP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 123,
        "title": "Câu 68: Khi cài đặt cấu hình cho DHCP thì thời gian mặc định để cấp phát 1 địa chỉ IP là bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Trong 8 ngày", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Vô thời gian đến khi nào client tắt kết nối", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cấp phát đến khi DHCP server thu hồi địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Trong 4 ngày", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 124,
        "title": "Câu 69: Một máy chủ được gọi là một DHCP server khi nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Được cài đặt dịch vụ DHCP, được cấu hình bằng địa chỉ IP tĩnh", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Được cài đặt dịch vụ DHCP, được cấu hình bằng địa chỉ IP động", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Được cài đặt dịch vụ DNS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tự động mặc định khi cài đặt hệ điều hành Window Server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 125,
        "title": "Câu 70: DHCP viết tắt của cụm từ nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Dynamic Home Configuration Protocol", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Driver Host Configuration Protocol", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Dynamic Host Configuration Program", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Dynamic Host Configuration Protocol", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 126,
        "title": "Câu 71: Hãy chọn phát biểu đúng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Một mô hình mạng chỉ cài đặt được duy nhất một DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Một mô hình mạng có thể tồn tại nhiều DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Một mô hình mạng hoạt động không thể cài đặt được DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "DHCP server chỉ hoạt động trên những mô hình mạng nhỏ", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 127,
        "title": "Câu 72: Công ty A đang dự kiến triển khai hệ thống thư điện tử Exchange 2003. Để đảm bảo kiến trúc AD (Active directory) được chuẩn bị hỗ trợ cho việc cài đặt. Công ty đó cần phải làm gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Thực hiện cài đặt DHCP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Thực hiện cài đặt IIS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Thực hiện lệnh chuẩn bị về rừng setup/forestprep", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Thực hiện tạo nhóm người dùng cho Exchange", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 128,
        "title": "Câu 73: Trong Group Policy có 3 từ khóa quan trọng là:",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Not Config, Enable và Disable", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Not Config, Enable và Config", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Not Config, Enable", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 129,
        "title": "Câu 74: Trong Group Policy, ý nghĩa của từ khóa Not Config là:",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Registry sẽ giữ nguyên trạng thái ban đầu của nó", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Thực thi hành động trong gpedit và Registry sẽ phát sinh 1 khóa mới để thực thi", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cấm không cho phép thực thi hành động đó", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 130,
        "title": "Câu 75: Trong Group Policy, ý nghĩa của từ khóa Enable là:",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Thực thi hành động trong gpedit và Registry sẽ phát sinh 1 khóa mới để thực thi", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Registry sẽ giữ nguyên trạng thái ban đầu của nó", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cấm không cho phép thực thi hành động đó", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 131,
        "title": "Câu 76: Trong Group Policy, ý nghĩa của từ khóa Disable là:",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Cấm không cho phép thực thi hành động đó", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Thực thi hành động trong gpedit và Registry sẽ phát sinh 1 khóa mới để thực thi", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Registry sẽ giữ nguyên trạng thái ban đầu của nó", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cho phép thực thi hành động đó", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 132,
        "title": "Câu 77: Thao tác thực hiện cấm truy cập vào ổ D là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Desktop", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Control Panel", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 133,
        "title": "Câu 78: Thao tác thực hiện ẩn ổ D là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Desktop", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Control Panel", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 134,
        "title": "Câu 79: Thao tác thực hiện ẩn Folder Option của Menu Tools là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Desktop", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Control Panel", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 135,
        "title": "Câu 80: Thao tác thực hiện tắt chức năng All Programs là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Desktop", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Control Panel", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 136,
        "title": "Câu 81: Thao tác thực hiện loại bỏ nút Logoff là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Desktop", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Control Panel", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 137,
        "title": "Câu 82: Thao tác thực hiện bỏ thuộc tính (Properties) của Recycle Bin là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Desktop", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Control Panel", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 138,
        "title": "Câu 83: Thao tác thực hiện loại bỏ thuộc tính (Properties) của My Computer là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Desktop", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Control Panel", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 139,
        "title": "Câu 84: Thao tác thực hiện vô hiệu hóa chức năng Add/Remove Programs là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Control Panel", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Desktop", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 140,
        "title": "Câu 85: Thao tác thực hiện ẩn danh sách các chương trình ứng dụng trong danh mục Add/Remove Programs là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Control Panel", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Desktop", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 141,
        "title": "Câu 86: Thao tác thực hiện không cho phép dùng trình ứng dụng Command Prompt (CMD) là thao tác thuộc thành phần xử lý nào trong Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "System", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Windows Component", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Start Menu và TaskBar", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Control Panel", "url_thumb": "", "type": ""},
            {"idResult": 4, "value": "Desktop", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 142,
        "title": "Câu 87: Hãy chọn phát biểu đúng về Recursive Query (truy vấn đệ quy) trong quá trình hoạt động của dịch vụ DNS?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Khi Name server nhận được truy vấn đệ quy, nó không nhất thiết phải trả về kết quả tìm được hoặc thông báo lỗi nếu như truy vấn này không phân giải được", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khi Name server nhận được truy vấn đệ quy, nó trả lời cho DNS client với thông tin tốt nhất mà nó có được vào thời điểm đó", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Khi Name server nhận được truy vấn đệ quy, nó không cần trả lời ngay cho DNS client với thông tin tốt nhất mà nó có được vào thời điểm đó", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Khi Name server nhận được truy vấn đệ quy thông báo lỗi nếu như truy vấn này phân giải được", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 143,
        "title": "Câu 88: Hãy chọn phát biểu đúng về Interactive query (truy vấn tương tác) trong quá trình hoạt động của dịch vụ DNS?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Khi Name server nhận được truy vấn tương tác, nó không nhất thiết phải trả về kết quả tìm được hoặc thông báo lỗi nếu như truy vấn này không phân giải được", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khi Name server nhận được truy vấn tương tác, nó trả lời cho DNS client với thông tin tốt nhất mà nó có được vào thời điểm đó", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Khi Name server nhận được truy vấn tương tác, nó không cần trả lời ngay cho DNS client với thông tin tốt nhất mà nó có được vào thời điểm đó", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Khi Name server nhận được truy vấn tương tác, nó bắt buộc phải trả về kết quả tìm được hoặc thông báo lỗi nếu như truy vấn này không phân giải được", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 144,
        "title": "Câu 89: Sau khi cài đặt và cấu hình dịch vụ DHCP server, một số máy tính đặt địa chỉ IP tĩnh rơi vào trong vùng địa chỉ cần cấp phát của DHCP. Như vậy, hệ thống mạng hiện tại có ảnh hưởng gì không? Nếu có thì cách khắc phục thế nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Các máy tính đặt địa chỉ IP tĩnh có thể bị đụng địa chỉ IP với các máy nhận IP động. Do đó chúng ta cần phải khai báo vùng loại trừ để loại bỏ các địa chỉ IP đã khai báo", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Các máy tính đặt địa chỉ IP tĩnh sẽ không ảnh hưởng gì", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Các máy tính đặt địa chỉ IP tĩnh không bị đụng địa chỉ IP với các máy nhận IP động. Do đó chúng ta không cần phải khai báo vùng loại trừ để loại bỏ các địa chỉ IP đã khai báo", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các phương án trên đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 145,
        "title": "Câu 90: Tài khoản tạo sẵn nào trên Windows cho phép người dùng truy cập vào các máy tính nếu họ không có mật mã riêng. Mặc định là tài khoản này không được sử dụng, nếu được sử dụng thì nó bị giới hạn về quyền?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Administrator", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "User", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Remote local user", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Guest", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 146,
        "title": "Câu 91: Khi một người dùng nào đó đăng nhập vào mạng, Domain controller (DC) sẽ kiểm tra tính hợp lệ của Username và password họ nhập vào có chính xác và khớp với dữ liệu lưu trong máy chủ hay không. Vậy DC đã cung cấp dịch vụ gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Dịch vụ thẩm định", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Dịch vụ cấp phép", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Dịch vụ DNS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Dịch vụ bảo mật", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 147,
        "title": "Câu 92: Cùng một công ty nhưng đó là công ty cực lớn và cần nhiều người quản lý các vùng khác nhau để đảm bảo việc quản lý DNS một cách dễ dàng. Khi một hệ thống tên miền được chia nhỏ ra để dễ quản lý được gọi là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Các Domain", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Các Domain tree", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Các Zone", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không thể chia nhỏ", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 148,
        "title": "Câu 93: Một DNS name space như Servertt.hubt.edu.vn còn được gọi là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "FQND", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "QDFN", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "FFQD", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "FQDN", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 149,
        "title": "Câu 94: Bạn có dự tính sử dụng hệ thống thư điện tử Exchange 2003 và sẽ sử dụng http, SMTP/POP3 để kết nối tới Exchange servers. Hãy lựa chọn các thành phần chỉ định của Windows server 2003 được yêu cầu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "SMTP service", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "World Wide Web Service", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "NNTP service", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 150,
        "title": "Câu 95: Tài khoản thực hiện cài đặt Exchange Server 2003 trên một máy Windows server 2003 phải thuộc nhóm tài khoản nào dưới đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Domain Users", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Domain name", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Administrators", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Local Administrators", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 151,
        "title": "Câu 96: Một công ty A đang lập kế hoạch cài đặt MS ISA server 2006 và muốn có một vài chọn lọc để giới hạn sự truy cập của người dùng tới Internet. Bước đầu tiên nên làm gì khi cài đặt ISA server 2006?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Cài đặt ISA server 2006", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Thiết kế các quy tắc truy cập sẽ cho phép truy cập Internet", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tạo dựng một chính sách sử dụng Internet định nghĩa các đòi hỏi an toàn của tổ chức", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Thiết kế một chiến lược xuất bản máy chủ (server Publishing)", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 152,
        "title": "Câu 97: Hình ảnh mô tả mô hình ISA nào?",
        "thumb": "assets/img/cau97.jpg",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Edge Firewall", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3-Leg Perimeter", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Front/Back Firewall", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 153,
        "title": "Câu 98: Hình ảnh trên mô tả mô hình ISA nào?",
        "thumb": "assets/img/cau98.jpg",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Edge Firewall", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3-Leg Perimeter", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Front/Back Firewall", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 154,
        "title": "Câu 99: Hình ảnh trên thể hiện mô hình ISA nào?",
        "thumb": "assets/img/cau99.jpg",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Edge Firewall", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3-Leg Perimeter", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Front/Back Firewall", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 155,
        "title": "Câu 100: Hãy cho biết ý nghĩa của hình ảnh trên?",
        "thumb": "assets/img/cau100.jpg",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Máy ABC luôn nhận địa chỉ 192.168.0.19 từ server DHCP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Máy ABC có địa chỉ tĩnh là 192.168.0.19", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Máy ABC luôn nhận địa chỉ Ip động trừ địa chỉ 192.168.0.19", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Máy ABC không thể đặt địa chỉ tĩnh là 192.168.0.19 trong mọi trường hợp", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 156,
        "title": "Câu 101: Bạn hãy cho biết Domain mới được tạo ra dưới dạng nào sau đây khi chọn tùy chọn 1 trong hình?",
        "thumb": "6.jpg",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Tạo Domain đầu tiên trong một rừng mới", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tạo Domain dựa trên cây đã có sẵn", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tạo ra một cây Domain mới trong một rừng có sẵn", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không tạo được cây Domain", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 157,
        "title": "Câu 102: Bạn hãy cho biết Domain mới được tạo ra dưới dạng nào sau đây khi chọn tùy chọn 2 trong hình?",
        "thumb": "6.jpg",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Tạo Domain đầu tiên trong một rừng mới", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tạo Domain dựa trên cây đã có sẵn", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tạo ra một cây Domain mới trong một rừng có sẵn", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không tạo được cây Domain", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 158,
        "title": "Câu 103: Bạn hãy cho biết Domain mới được tạo ra dưới dạng nào sau đây khi chọn tùy chọn 3 trong hình?",
        "thumb": "assets/img/cau103.png",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Tạo Domain đầu tiên trong một rừng mới", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tạo Domain dựa trên cây đã có sẵn", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tạo ra một cây Domain mới trong một rừng có sẵn", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không tạo được cây Domain", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 159,
        "title": "Câu 104: Hãy cho biết biểu tượng máy tính bị chéo đỏ cho biết Card mạng đang ở trạng thái nào sau đây?",
        "thumb": "assets/img/cau104.png",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Card mạng đang nhận IP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Card mạng không nhận được IP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Card mạng bị trùng IP với một card mạng khác", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Card mạng không được gắn cáp", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 160,
        "title": "Câu 105: Khi cài đặt dịch vụ AD. Ta chọn tùy chọn 1 trong hình, thì hệ điều hành nào được sử dụng?",
        "thumb": "assets/img/cau105-106.png",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Window 2000 server và window 2003 server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Window XP và window 2003 server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Những hệ điều hành trước win 2000 server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Window NT", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 161,
        "title": "Câu 106: Khi cài đặt dịch vụ AD. Ta chọn tùy chọn 2 trong hình, thì hệ điều hành nào được sử dụng?",
        "thumb": "assets/img/cau105-106.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Window 2000 server và window 2003 server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Window XP và window 2003 server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Những hệ điều hành trước win 2000 server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Window NT", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 162,
        "title": "Câu 107: Hãy cho biết ý nghĩa của hình ảnh trên trong quá trình cấu hình dịch vụ DHCP?",
        "thumb": "assets/img/cau107.png",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Client nhận được Ip và Subnet mask", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Client nhận được Default getway", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "DHCP không được cấu hình", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Client nhận được địa chỉ DNS", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 163,
        "title": "Câu 108: Mô hình ISA nào có độ bảo mật kém nhất trong các mô hình dưới đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Edge Firewall", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Front/Back Firewall", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "3-Leg Perimeter", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 164,
        "title": "Câu 109: Thông số 1 trong hình có ý nghĩa là gì trong quá trình cấu hình dịch vụ DHCP?",
        "thumb": "assets/img/cau109-111.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Tên máy tính được phép sử dụng 1 địa chỉ IP cố định trên mạng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tên máy chủ DHCP cấp địa chỉ IP động cho toàn mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tên client đã được cấu hình địa chỉ IP tĩnh từ trước do người quản trị cài đặt", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các phương án đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 165,
        "title": "Câu 110: Thông số 3 trong hình có ý nghĩa gì trong quá trình cấu hình dịch vụ DHCP?",
        "thumb": "assets/img/cau109-111.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Địa chỉ vật lý của một máy tính", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tên máy tính cho người dùng đặt ngẫu nhiên", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Số ký tự của thông số trong chip của máy tính", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các phương án đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 166,
        "title": "Câu 111: Thông số 2 trong hình có ý nghĩa gì trong quá trình cấu hình dịch vụ DHCP?",
        "thumb": "assets/img/cau109-111.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Địa chỉ IP chỉ dành riêng cho May ABC", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Địa chỉ IP của máy chủ DHCP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Địa chỉ Ip tĩnh của May ABC đã được cài đặt, không thể cấp phát cho máy khác", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Địa chỉ Ip có thể cấp phát cho các máy trong mạng trừ May ABC", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 167,
        "title": "Câu 112: Hãy cho biết trong quá trình cấu hình dịch vụ DHCP ta chọn tùy chọn Yes, I want to configure these options now có tác dụng gì?",
        "thumb": "assets/img/cau112.png",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Đồng ý lưu toàn bộ thông tin cấu hình vào máy tính và thoát khỏi quá trình cài đặt", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Đồng ý tiếp tục khai báo các lựa chọn cơ bản trong quá trình cấu hình DHCP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "DHCP không được cấu hình", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Đồng ý xóa hoàn toàn các cài đặt trong quá trình cấu hình DHCP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 168,
        "title": "Câu 113: Để xem địa chỉ MAC của một PC, chúng ta dùng lệnh nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Ipconfig/renew", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Ipconfig/all", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Ipconfig/release", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Ping", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 169,
        "title": "Câu 114: Chức năng của Group Policy?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Triển khai phần mềm ứng dụng. Gán các quyền hệ thống cho người dùng. Giới hạn những ứng dụng mà người dùng được phép thi hành. Kiểm soát các thiết lập hệ thống. Thiết lập các kịch bản đăng nhập, thoát, khởi động và tắt máy. Đơn giản hóa và hạn chế các chương trình. Hạn chế tổng quát màn hình của người dùng.", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Triển khai phần mềm ứng dụng. Gán các quyền hệ thống cho người dùng. Giới hạn những ứng dụng mà người dùng được phép thi hành. Kiểm soát các thiết lập hệ thống.", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Triển khai phần mềm ứng dụng. Gán các quyền hệ thống cho người dùng. Giới hạn những ứng dụng mà người dùng được phép thi hành. Kiểm soát các thiết lập hệ thống. Thiết lập các kịch bản đăng nhập, thoát, khởi động và tắt máy. Đơn giản hóa và hạn chế các chương trình.", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Triển khai phần mềm ứng dụng. Gán các quyền hệ thống cho người dùng. Giới hạn những ứng dụng mà người dùng được phép thi hành. Kiểm soát các thiết lập hệ thống. Thiết lập các kịch bản đăng nhập, thoát, khởi động và tắt máy. Đơn giản hóa và hạn chế các chương trình. Hạn chế tổng quát màn hình của người dùng. Hạn chế hệ thống.", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 170,
        "title": "Câu 115: Chọn câu sai, phân loại Domain Name Server gồm có?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Primary Name Server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Secondary Name Server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cachinh Name Server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Address Name Server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 171,
        "title": "Câu 116: Có mấy loại tài khoản người dùng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "4", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "5", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 172,
        "title": "Câu 117: Có mấy loại tài khoản nhóm?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "4", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "5", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 173,
        "title": "Câu 118: Tài khoản người dùng cục bộ được quản lý bằng công cụ?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Computer Management COMPMGMT.MSC", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Active Directory Users and Computer DSA.MSC", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Security Accounts Manager SAM", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Domain Controller", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 174,
        "title": "Câu 119: Tài khoản người dùng miền được quản lý bằng công cụ?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Computer Management COMPMGMT.MSC", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Active Directory Users and Computer DSA.MSC", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Security Accounts Manager SAM", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Domain Controller", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 175,
        "title": "Câu 120: Mail Server là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Chứa mailbox của người dùng.", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Những chương trình hỗ trợ chức năng đọc và soạn thảo thư", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Máy giữ vai trò máy chủ mail chính trong hệ thống mạng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Máy kết nối giữa các mạng dùng các giao thức truyền thông khác nhau hoặc kết nối các mạng khác nhau dùng chung giao thức.", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 176,
        "title": "Câu 1: Để nâng cao bảo mật trong mạng bạn thực hiện chính sách Maximum Password Age là 7 ngày. Chính sách này sẽ yêu cầu người sử dụng phải đổi mật khẩu hàng tuần. Tuy nhiên sau một thời gian bạn nhận thấy có một vài người sử dụng sau khi đổi sang mật khẩu mới lại đổi ngay về mật khẩu cũ. Bạn sẽ dụng chính sách nào dưới đây để tránh tình trạng này?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Mini Password Age", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Store Passwords Using Reversible Encryption", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Enforce password history", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Maximum Password Age", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 177,
        "title": "Câu 2: Địa chỉ IP v4 được hiểu thế nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Là một dãy gồm 4 nhóm số, mỗi nhóm có giá trị 1 bit dùng để định danh địa chỉ máy tính trong một mạng nào đó", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Là một dãy gồm 6 nhóm số, mỗi nhóm có giá trị 2 byte dùng để định danh địa chỉ máy tính trong một mạng nào đó", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là một dãy gồm 4 nhóm số, mỗi nhóm có giá trị 1 byte dùng để định danh địa chỉ máy tính trong một mạng nào đó", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Là một dãy gồm 6 nhóm số, mỗi nhóm có giá trị 1 byte dùng để định danh địa chỉ máy tính trong một mạng nào đó", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 178,
        "title": "Câu 3: Địa chỉ IP được cấp phát thế nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Do người dùng tự cài đặt", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Do máy chủ tự động cấp phát", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Các phương án trên đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 179,
        "title": "Câu 4: IIS 6.0 cung cấp những công cụ gì để hỗ trợ và quản lý Website?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "IIS manager", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Remote Administration (HTML) Tool", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Command-line administration scipts", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 180,
        "title": "Câu 5: Server (máy chủ) là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Là một máy tính dùng để cung cấp dịch vụ WEB", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Là một máy tính dùng để cung cấp dịch vụ tên miền", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là một máy tính dùng để cung cấp các thông tin dịch vụ mà người quản trị cài đặt trên đó", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Là một máy tính dùng để quản trị mạng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 181,
        "title": "Câu 6: HTTP viết tắt của cụm từ nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Hexa Transfer Protocol", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Hypertext Transfer Program", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Hypertext Transfer Protocol", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Header Transfer Protocol", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 182,
        "title": "Câu 7: Hệ điều hành máy chủ là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Là phần mềm đóng vai trò như là một môi trường trên đó người quản trị có thể cài đặt thêm các phần mềm ứng dụng theo yêu cầu", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Là một phần mềm quản trị nội dung Web và các tài nguyên như email hay chia sẻ ứng dụng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là phần cứng đóng vai trò như là một môi trường trên đó người quản trị có thể cài đặt thêm các phần mềm ứng dụng theo yêu cầu", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Là một chương trình ứng dụng hỗ trợ soạn thảo văn bản và in ấn", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 183,
        "title": "Câu 8: DNS name space quy định tối đa bao nhiêu ký tự?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "63", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "256", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "60", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 184,
        "title": "Câu 9: Subdomain (tên miền con) là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Không có tên miền con", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Là tên một máy tính trong workgroup", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là tên đặt theo tên miền chính nhằm chia nhỏ tên miền chính", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tên miền con được xem như là một tên miền chính", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 185,
        "title": "Câu 10: ICANN viết tắt là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "International Corporation for Assigned Names and Numbers", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Internet Corporate for Assigned Names and Nations", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Internet Corporation for Assigned Names and Numbers", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Internet Corporate for Assigned Names and Numbers", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 186,
        "title": "Câu 11: Máy chủ Web là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Là một máy tính trong đó cài các hệ điều hành dòng server và được cài đặt các phần mềm xử lý yêu cầu truy cập dịch vụ Web", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Là một máy tính trong đó cài các hệ điều hành Window XP và được cài đặt các phần mềm xử lý yêu cầu truy cập dịch vụ Web", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là một máy tính trong đó cài các hệ điều hành Window và được cài đặt các phần màu xử lý yêu cầu truy cập dịch vụ Web", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Là một máy tính trong đó cài các hệ điều hành Unix được cài đặt các phần mềm xử lý yêu cầu truy cập dịch vụ Web", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 187,
        "title": "Câu 12: Các đối tượng (Object) lưu trữ trong Active Directory gồm?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "User, Printers", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Server, Computer", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Database, Groups", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 188,
        "title": "Câu 13: Chọn phát biểu đúng về Forest trong cấu trúc AD (Active Directory)?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Forest gồm một nhóm hay tổ chức phân cấp của nhiều cây domain độc lập hoàn toàn", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Forest tồn tại trong cấu trúc vật lý của AD", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Forest là một đối tượng trong OU", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 189,
        "title": "Câu 14: Domain name (tên miền) là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Là một tên định danh trên mạng Internet dùng để thay thế cho một địa chỉ Ip của một máy chủ nào đó", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Là một tên định danh trên mạng Internet dùng để phân chia thành nhiều lớp mạng con", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là tên một máy trạm", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Là tên máy tính do người dùng đặt tùy ý", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 190,
        "title": "Câu 15: Phiên bản Web Edition thuộc hệ điều hành nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Window XP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Unix", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Window server 2003", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các phương án trên", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 191,
        "title": "Câu 16: Mục đích chính của việc đăng nhập (logging) vào AD (Active Directory) của một user Account?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Để truy nhập Domain Controller", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Để truy nhập các dịch vụ mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Để truy nhập file trong máy tính cục bộ", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Để duy trì bảo mật cục bộ", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 192,
        "title": "Câu 17: Bạn phải hoàn thành những tác vụ gì trước khi nâng cấp một máy chủ Domain Controller?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Cấu hình địa chỉ IP động và cài đặt DNS", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cấu hình địa chỉ IP tĩnh và cài đặt DNS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cài đặt dịch vụ DHCP và DNS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cấu hình địa chỉ IP tĩnh và cài đặt DHCP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 193,
        "title": "Câu 18: OU trong cấu trúc của AD (Active Directory) là viết tắt của?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Organizational Unit", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Object Unkhown", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Object Unit", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Organizational Unique", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 194,
        "title": "Câu 19: Chọn một phát biểu sai về AD (Active Directory)?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "AD có thể lưu trữ phân bố trên nhiều máy", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Thông tin trong AD được sử dụng cho việc quản lý và xử lý các tài nguyên trên mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cấu trúc logic của AD gồm nhiều Site nối với nhau", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cấu trúc logic hoàn toàn khác với cấu trúc vật lý của AD", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 195,
        "title": "Câu 20: Phần mềm Web server là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Là một phần mềm chia sẻ ứng dụng Web", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Là một hệ điều hành quản lý quá trình duyệt Web và dịch vụ Email", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là một phần mềm đóng vai trò xử lý các yêu cầu duyệt Web và các dịch vụ trên Internet từ phía người dùng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 196,
        "title": "Câu 21: Với hình vẽ sau bạn hãy cho biết máy tính của bạn đang hoạt động trong môi trường nào?",
        "thumb": "assets/img/cau21.png",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Môi trường Domain", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Môi trường Workgroup", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Môi trường là một Domain controller", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Môi trường là một máy cấp phát địa chỉ IP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 197,
        "title": "Câu 22: Bạn hãy cho biết 24 dưới có ý nghĩa như thế nào?",
        "thumb": "assets/img/cau22-23.png",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Số máy tối đa trong mạng có thể nhận được địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Địa chỉ cuối cùng trong vùng cấp Ip động", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Số Bit thuộc vùng mạng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Số bit thuộc vùng Host", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 198,
        "title": "Câu 23: Chọn đáp án đúng cho ý nghĩa của hình ảnh trên trong các bước cấu hình DHCP?",
        "thumb": "assets/img/cau22-23.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Server sẽ cấp địa chỉ từ 172.29.1.100 đến 172.29.1.200", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Server sẽ không cấp địa chỉ từ 172.29.1.100 đến 172.29.1.200", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Server sẽ cấp địa chỉ theo lớp địa chỉ 172.29.1.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Server không được cài đặt dịch vụ DHCP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 199,
        "title": "Câu 24: Để đăng nhập một máy con vào một máy Domain Controller bạn phải đảm bảo những yêu cầu nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Khai báo IP DNS", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tất cả các đáp án đều đúng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Thay đổi môi trường Workgroup thành Domain", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các đáp án đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 200,
        "title": "Câu 25: Dịch vụ mạng nào sau đây có thể đảm bảo cho máy tính của bạn nhận được IP, Default gateway, subnet mask, DNS . . .?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "DHCP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DNS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "IIS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "FTP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 201,
        "title": "Câu 26: Khi cài đặt AD, Password trên đặt trong trường hợp nào sau đây?",
        "thumb": "assets/img/cau26.png",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Password đặt cho user adminitrator", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Password đặt cho hệ thống khởi động ở chế độ safe mode", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Password đặt cho hệ thống khởi động ở chế độ Directory service restore mode.", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các đáp án trên đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 202,
        "title": "Câu 27: Để đảm bảo cho việc quản lý một cách dễ dàng và thuận tiện thì người quản trị mạng phải tạo ra các user như thế nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Tạo ra một Organiztional Units và tạo các user trong đó", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tạo ra một group riêng và tạo các user vào group đó", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tạo ra các user và phân quyền đặc trưng cho các user đó", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tạo ra các user và gán cho các user vào nhóm Administrator", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 203,
        "title": "Câu 28: Hãy cho biết ý nghĩa của hình ảnh trên?",
        "thumb": "assets/img/cau28.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Vùng địa chỉ không được cấp phát bởi DHCP server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Vùng địa chỉ được ưu tiên khi cấp phát", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Vùng địa chỉ từ 172.29.14.100 đến 172.29.14.110 không có trong danh sách địa chỉ IP của DHCP server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 204,
        "title": "Câu 29: Tại công ty A, có hệ thống mạng Workgroup với 60 máy, dữ liệu hiện tại của công ty được lưu trữ phân tán tại mỗi PC. Nhu cầu của công ty muốn quản lý hệ thống mạng tập trung với mọi thông tin, dữ liệu, tài nguyên . . . Công ty sẽ phải làm gì để có thể triển khai hệ thống mạng theo yêu cầu trên?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Chọn một Server chuyên dụng và cài đặt Win server 2003", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cài đặt dịch vụ Active Directory cho server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Gia nhập hệ thống client vào domain", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các đáp án đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 205,
        "title": "Câu 30: Các phiên bản Windows Server sau đây, phiên bản nào không có dịch vụ Active Directory?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "MS Windows Server 2003 Web Edition", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "MS Windows Server 2003 Standard", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "MS Windows Server 2003 Enterprise", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "MS Windows Server 2003 DataCenter", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 206,
        "title": "Câu 31: Cấu hình mặc định khi chúng ta thực hiện các policy là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Not Configured", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Disabled", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Default Configured", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Enabled", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 207,
        "title": "Câu 32: Trên máy tính sử dụng Window 2000 Pro, bạn tạo ra phân vùng D: sử dụng file hệ thống FAT32, sau một thời gian sử dụng để tăng tính bảo mật, bạn quyết định chuyển phân vùng này thành NTFS. Bạn sẽ dùng lệnh nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Convert D:/FS:NTFS", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Convert D:/FS-NTFS", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Convert D:/FS/NTFS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Convert D:/NTFS", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 208,
        "title": "Câu 33: Bạn là quản trị mạng cho một công ty A, công ty bạn muốn triển khai 2 NetID khác nhau cho hai phòng ban, bạn làm thế nào để trên mạng không bị trùng IP và tiết kiệm công sức nhất cho người quản trị?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Sử dụng Ip tĩnh trên mỗi nhánh mạng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cài đặt và cấu hình DHCP server trên mỗi nhánh mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Một nhánh mạng dùng DHCP server, nhánh còn lại sử dụng IP tĩnh", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cấu hình DHCP server và DNS server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 209,
        "title": "Câu 34: Tại hệ thống mạng của công ty A đã cài đặt và cấu hình DHCP server. Công ty hiện triển khai thêm một vài server và muốn giành riêng một số địa chỉ IP cho các server này, bạn sẽ làm gì để thực hiện việc cấp IP cho các server mới như yêu cầu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Xóa và tạo lại Scope", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Trong DHCP server không cho phép bổ sung", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Trong DHCP server chọn Addess Pool", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Trong DHCP server chọn DHCP Reservation", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 210,
        "title": "Câu 35: Dịch vụ nào sau đây cần phải cài đặt khi cài đặt Mail Exchange Server 2003 trên các Mail server?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "ASP.NET, IIS", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "ASP.NET, IIS, SMTP, NNTP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "ASP.NET, IIS, SMTP, NNTP, FTP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không yêu cầu dịch vụ nào", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 211,
        "title": "Câu 36: Tổ chức IETF viết tắt là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Internet Engineering Task Force", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "International Engineering Task Force", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Internet Engineering Task Form", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Internet Electric Task Force", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 212,
        "title": "Câu 37: Trước khi cài đặt DNS hay DHCP cần phải đảm bảo vấn đề nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Máy được cài đặt phải đảm bảo là một máy điều khiển vùng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Máy được cài đặt phải đảm bảo nằm trong Domain của một máy điều khiển vùng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Máy được cài đặt phải đảm bảo cấu hình IP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Máy được cài đặt phải đảm bảo không cài dịch vụ khác trên máy DNS hay máy DHCP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 213,
        "title": "Câu 38: Phần nào dưới đây không phải là một dịch vụ mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "File", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "In ấn", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Remote Desktop", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cơ sở dữ liệu", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 214,
        "title": "Câu 39: Giao thức truyền mail trên Window 2003 server?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "SMTP và POP 3", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "SMTP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "FTP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "HTTP và SMTP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 215,
        "title": "Câu 40: Sau bao nhiêu thời gian thuê thì client gửi tín hiệu DHCP Request?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "87.5%", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "100%", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "80%", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "50%", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 216,
        "title": "Câu 41: Địa chỉ IP 172.28.146.2 là địa chỉ của server nào?",
        "thumb": "assets/img/cau41.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Server DNS", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Mail Server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Server FTP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Server DHCP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 217,
        "title": "Câu 42: Để cấu hình cho client nhận địa chỉ IP động ta chọn tùy chọn nào trong hình trên?",
        "thumb": "assets/img/cau42-44.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không thể cấu hình IP động", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 218,
        "title": "Câu 43: Để cấu hình cho client nhận địa chỉ IP tĩnh ta chọn tùy chọn nào trong hình trên?",
        "thumb": "assets/img/cau42-44.png",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không thể cấu hình IP tĩnh", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 219,
        "title": "Câu 44: Để cấu hình địa chỉ DNS server trên client ta chọn tùy chọn nào trong hình trên?",
        "thumb": "assets/img/cau42-44.png",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 220,
        "title": "Câu 45: Khi cài đặt cấu hình Web server để chỉ định địa chỉ sử dụng cho Website trong mục 1 nếu ta nhập 172.18.100.2 có nghĩa là gì?",
        "thumb": "assets/img/cau45-48.png",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "HTTP không thể hoạt động trên địa chỉ 172.18.100.2 của server mà bạn đang cấu hình", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "HTTP được hoạt động trên địa chỉ IP của server là 172.18.100.2", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chưa khai báo địa chỉ server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Địa chỉ của Client khi tham gia truy cập tới Web server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 221,
        "title": "Câu 46: Khi cài đặt cấu hình Web server mục 2 trong hình có tác dụng làm gì?",
        "thumb": "assets/img/cau45-48.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Chỉ định cổng hoạt động cho dịch vụ", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Chỉ định số máy client có thể truy cập tới Web server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chỉ định số Web server có trong mạng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các phương án đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 222,
        "title": "Câu 47: Khi cài đặt cấu hình Web server, khi nào thì ta không cần cài đặt thông số cho mục 3 trong hình?",
        "thumb": "assets/img/cau45-48.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Khi ta tổ chức 1 Website tương ứng với 1 địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khi ta tổ chức nhiều Website tương ứng với 1 địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Khi ta tổ chức 1 Website tương ứng với nhiều địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các phương án đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 223,
        "title": "Câu 48: Khi cài đặt cấu hình Web server, khi nào thì ta cần cài đặt thông số (Ví dụ: www.hubt.edu.vn) cho mục 3 trong hình?",
        "thumb": "assets/img/cau45-48.png",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Khi ta tổ chức 1 Website tương ứng với 1 địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khi ta tổ chức nhiều Website cùng dùng chung 1 địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Khi ta tổ chức 1 Website tương ứng với nhiều địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các phương án đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 224,
        "title": "Câu 49: Hình ảnh trên là?",
        "thumb": "assets/img/cau49.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Cấu trúc logic của Active Directory", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cấu trúc vật lý của Active Directory", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Mô hình dịch vụ DNS", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Mô hình dịch vụ DHCP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 225,
        "title": "Câu 50: Tạo tài khoản đăng nhập trên Window server 2003 có thể tối đa bao nhiêu ký tự?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "104", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "20", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "100", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 226,
        "title": "Câu 51: Giao thức HTTP sử dụng Port bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "443", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "80", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "8080", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "21", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 227,
        "title": "Câu 52: DNS nhận nhiệm vụ gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Phân giải IP thành tên miền và tên miền thành IP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Phân giải IP thành tên miền", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Phân giải tên miền thành IP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Là máy điều khiển vùng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 228,
        "title": "Câu 53: Trên Domain, bạn cấu hình Password Policy đặt thông số Minimum Password Age là 1 ngày. Hãy chọn đáp án đúng đối với người sử dụng thông thường trong Domain này?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Người sử dụng sau khi thay đổi mật khẩu phải đợi một ngày sau mới thay đổi mật khẩu lần nữa", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Người sử dụng có thể thay đổi mật khẩu ngay tức khắc", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Sau một ngày người sử dụng này sẽ nhận được thông báo Mật khẩu của bạn đã hết hạn", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các đáp án đều sai", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 229,
        "title": "Câu 54: Có thể áp dụng chính sách nhóm (group policy) trực tiếp cho những đối tượng nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "OU", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Domain", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Group", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các đáp án đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 230,
        "title": "Câu 55: ISP viết tắt của?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Internet Service Providers", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Internet Service Promotion", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Internet Service Protocol", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "International Service Providers", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 231,
        "title": "Câu 56: Windows 2003 server hỗ trợ bộ giao thức nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Các đáp án đều đúng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Apple Talk", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "IPX/SPX", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "TCP/IP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 232,
        "title": "Câu 57: Windows Server 2003 có thêm những chức năng nào so với các hệ điều hành Window thông thường?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Web server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Application server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "File server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các đáp án đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 233,
        "title": "Câu 58: Sử dụng công cụ MMC trong Window 2003 server có tác dụng lớn là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Quản trị tập trung từ máy tính", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cấu hình dịch vụ Web", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Quản lý phân tán tài nguyên các máy client", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cấu hình dịch vụ DNS", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 234,
        "title": "Câu 59: Công cụ nào được sử dụng để kích hoạt Remote Desktop trên một máy chủ?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "System Properties", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Terminal Services Licensing", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Services Manager", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Terminal Services Configuration", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 235,
        "title": "Câu 60: Một máy tính khi bắt đầu tham gia vào mạng thì đã tồn tại địa chỉ gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Địa chỉ vật lý", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Địa chỉ IP và vật lý", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không có địa chỉ nào", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 236,
        "title": "Câu 61: Công ty của bạn kết nối Internet. Bạn mở cửa sổ trình duyệt trên máy để truy nhập vào một trong Web trên Internet nhưng thông báo lỗi. Bạn chạy lệnh Ipconfig và nhận được thông báo Media disconnected và cũng không thể thực hiện được lệnh Ping tới bất kỳ một địa chỉ nào khác. Nguyên nhân nào gây ra trục trặc này?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Máy chủ DHCP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Card mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Máy chủ Web", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Máy chủ DNS", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 237,
        "title": "Câu 62: Bạn đang quản trị mạng tại một công ty. Công ty này đang sử dụng một server với dịch vụ Proxy để chia sẻ quyền truy cập Internet cho các máy trong công ty. Bạn cần triển khai một tường lửa nào để cung cấp một kết nối an toàn giữa mạng bên trong và Internet?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Packet filtering", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Stateful filtering", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Intrusion detection", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Application gateway", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 238,
        "title": "Câu 63: Khi cài đặt cấu hình Web server để chỉ định địa chỉ sử dụng cho Website trong mục Enter the IP address to use for this Website, nếu ta chỉ định All Unassigned có nghĩa là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "HTTP không thể hoạt động trên địa chỉ của server mà bạn đang cấu hình", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "HTTP được hoạt động trên tất cả các địa chỉ của server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chưa khai báo địa chỉ server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Mặc định không cần chỉ định", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 239,
        "title": "Câu 64: Khi tiến hành cài đặt dịch vụ Active Directory, muốn nâng cấp thành Domain Controller để quản lý một miền con của một Domain đã có sẵn thì sẽ chọn mục nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Domain in a new forest", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Domain tree in an existing forest", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Child domain in an existing domain tree", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 240,
        "title": "Câu 65: Để xây dựng thêm một Server đảm nhiệm cùng nhiệm vụ với Domain Controller Server đã có trong hệ thống mạng, về việc quản lý tài nguyên, tài khoản và chính sách hệ thống. Bạn cần xây dựng Server nào cho hệ thống mạng của mình?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Child Domain Controller server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Sub Domain Controller server", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Backup Domain Controller server", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Domain Controller server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 241,
        "title": "Câu 66: Cấu hình DHCP như trong hình. Hãy cho biết máy nhận IP động sẽ nhận địa chỉ nào sau đây?",
        "thumb": "assets/img/cau66.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Default Gateway", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "IP Address", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Subnet mask", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Preferred DNS server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 242,
        "title": "Câu 67: Hãy chọn phát biểu đúng khi nói về quá trình cài đặt Window Server 2003?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Trình cài đặt có thể được nạp bằng cách khởi động từ đĩa CD", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Trình cài đặt yêu cầu mật khẩu của tài khoản Administrator không là trống để đáp ứng các yêu cầu về tính phức tạp", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Trình cài đặt yêu cầu bạn phải kích hoạt bản quyền sản phẩm trước khi cài đặt hệ điều hành", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 243,
        "title": "Câu 68: Tạo tên tài khoản đăng nhập trên Window 2000/XP có thể tối đa bao nhiêu ký tự?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "104", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "20", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "105", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 244,
        "title": "Câu 69: Mail Client là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Máy kết nối giữa các mạng dùng các giao thức truyền thông khác nhau hoặc kết nối các mạng khác nhau dùng chung giao thức", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Máy giữ vai trò máy chủ Mail chính trong hệ thống mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chứa mailbox của người dùng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Chương trình hỗ trợ chức năng đọc và soạn thảo thư", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 245,
        "title": "Câu 70: Mail Gateway là?",
        "thumb": "",
        "isCorrect": true,
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Máy kết nối giữa các mạng dùng các giao thức truyền thông khác nhau hoặc kết nối các mạng khác nhau dùng chung giao thức", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Máy giữ vai trò máy chủ Mail chính trong hệ thống mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Chứa mailbox của người dùng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Chương trình hỗ trợ chức năng đọc và soạn thảo thư", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 246,
        "title": "Câu 1: Hãy chọn phương án đúng cho biết thứ tự các tầng của mô hình OSI là thế nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Physical, Data-Link, Network, Transport, Session, Presentation, Application", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Physical, Data-Link, Transport, Network, Session, Presentation, Application", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Physical, Data-Link, Network, Session, Transport, Presentation, Application", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Physical, Data-Link, Network, Transport, Presentation, Session, Application", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 247,
        "title": "Câu 2: Hãy xác định độ dài của địa chỉ IPv6 là bao nhiêu trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "256 bits", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "128 bits", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "8 bits", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "32 bits", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 248,
        "title": "Câu 3: Thiết bị nào sau đây có chức năng quyết định đường đi của các gói tin tới đích?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Switch", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Repeater", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Router", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Bridge", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 249,
        "title": "Câu 4: Hãy chọn mục tiêu chính nào để kết nối các máy tính thành một mạng trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Để cung cấp các dịch vụ mạng đa dạng và chia sẻ tài nguyên chung", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Để cung cấp tài nguyên trên mạng và sử dụng các thiết bị giá thành rẻ", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Để hạn chế sử dụng nhiều thiết bị cùng lúc", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Để cung cấp được nhiều thông tin cho nhiều người biết", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 250,
        "title": "Câu 5: POF là loại cáp gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Cáp quang làm bằng Plastic", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cáp quang làm bằng thuỷ tinh", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cáp đồng trục Thinnet", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cáp đồng trục Thicknet", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 251,
        "title": "Câu 6: Xác định Mask default của địa chỉ 200.50.2.4 là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "255.255.255.4", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.0.0.0", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.0.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.0", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 252,
        "title": "Câu 7: Hãy chọn khái niệm nào đúng về giao thức (Protocol) trong phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Giao thức là một tập các quy ước mà các thiết bị trên mạng phải tuân theo để có thể liên lạc được với nhau", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Giao thức là các tín hiệu nhị phân truyền đi trước khi truyền dữ liệu thực sự", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Giao thức là cơ chế ''bắt tay ba lần'' mà mọi thiết bị trên mạng phải tuân theo để có thể liên lạc được với nhau", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Giao thức là chương trình mà các máy tính phải có để hoạt động được trong mạng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 253,
        "title": "Câu 8: Hãy chọn phương án đúng cho biết cáp xoắn đôi CAT 6 có tốc độ truyền là bao nhiêu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "10Mbps", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "1000Mbps", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "50Mbps", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "100Mbps", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 254,
        "title": "Câu 9: Hãy cho biết nhược điểm chính của mạng dạng Star là gì trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Cần quá nhiều cáp để kết nối tới nút mạng trung tâm", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Khó cài đặt và bảo trì", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Khó khắc phục khi lỗi cáp xảy ra, và ảnh hưởng tới các nút mạng khác", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không có khả năng thay đổi khi đã lắp đặt", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 255,
        "title": "Câu 10: Hãy quan sát hình ảnh, cho biết đây là loại cáp nào trong các phương án sau đây?",
        "thumb": "assets/img/cau10.png",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Cáp UTP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cáp đồng trục", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cáp STP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cáp quang", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 256,
        "title": "Câu 11: Phương pháp truy nhập nào dưới đây lắng nghe lưu thông mạng trên đường truyền trước khi truyền dữ liệu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "CSMA/CD", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "CSMA/CA", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Token RING", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Token BUS", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 257,
        "title": "Câu 12: Hãy chọn nguyên nhân chính phá vỡ hệ thống của mạng Token ring là gì trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Là do mất thẻ bài", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Là do không khởi tạo vòng logic", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là do khôi phục dữ liệu bị mất do gẫy vòng logic", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Là do dung lượng của dữ liệu quá nhẹ", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 258,
        "title": "Câu 13: Chuẩn nào sau đây đặc tả mạng cục độ hình vòng, sử dụng thẻ bài (Token) để điều khiển truy nhập đường truyền?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "IEEE 802.4", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "IEEE 802.2", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "IEEE 802.3", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "IEEE 802.5", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 259,
        "title": "Câu 14: Tia hồng ngoại thuộc?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Đường truyền vô tuyến", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Đường truyền hữu tuyến", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Hữu tuyến và vô tuyến", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Không được sử dụng trên mạng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 260,
        "title": "Câu 15: 3G là viết tắt của?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "3rd Generation", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3rd Group", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "3rd Gopher", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Goto 3", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 261,
        "title": "Câu 16: Phương thức định tuyến nào không sử dụng giao thức định tuyến?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Định tuyến động", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Định tuyến tĩnh", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Định tuyến giao nhau", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Định tuyến ngẫu nhiên", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 262,
        "title": "Câu 17: Chọn đáp án sai về chức năng của Card mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Chuyển dữ liệu từ CPU tới các slot thích hợp trong máy tính", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Chuyển đổi dữ liệu từ các đường truyền song song thành chuỗi dữ liệu tuần tự để có thể truyền thông qua mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Truyền và nhận dữ liệu dựa trên địa chỉ vật lý của card mạng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Định dạng dữ liệu theo những giao thức tương ứng", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 263,
        "title": "Câu 18: Loại thiết bị nào cho phép sử dụng toàn bộ băng thông của đường truyền?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Hub", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Switch", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Repeater", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Transceiver", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 264,
        "title": "Câu 19: Địa chỉ mạng riêng (Private IP address) được quy định trong lớp C là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "200.168.0.0 đến 200.168.255.255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "195.168.0.0 đến 195.168.255.255", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "192.168.0.0 đến 192.168.255.255", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "192.100.0.0 đến 192.100.255.255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 265,
        "title": "Câu 20: Đặc điểm của Subnet Mask là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Tất cả các bit của phần Netid là 1, tất cả các bit của phần Hostid là 0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tất cả các bit của phần Netid là 0, tất cả các bit của phần Hostid là 1", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tất cả các bit của phần Netid là 1, tất cả các bit của phần Hostid là 1", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Mask là một số nhị phân 32 bit", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 266,
        "title": "Câu 21: Địa chỉ 191.10.255.255 là địa chỉ gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Broadcast lớp C", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Broadcast lớp A", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Broadcast lớp B", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Subnet mask lớp B", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 267,
        "title": "Câu 22: Mỗi phần trong một địa chỉ IPv4 chiếm bao nhiêu Bit?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "4", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "8", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "16", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "32", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 268,
        "title": "Câu 23: Mạng FDDI sử dụng loại cáp nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Cáp xoắn", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cáp quang", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cáp đồng trục", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cáp S", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 269,
        "title": "Câu 24: Sự giống nhau giữa 2 mô hình OSI và TCP/IP là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Sử dụng kỹ thuật chuyển mạch gói", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Đều có lớp trình diễn", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cấu trúc 7 tầng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Sử dụng kỹ thuật chuyển mạch kênh", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 270,
        "title": "Câu 25: Địa chỉ mạng riêng (Private IP address) được quy định trong lớp A là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "5.0.0.0 đến 10.255.255.255.255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "10.0.0.0 đến 10.255.255.255", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "20.0.0.0 đến 20.255.255.255", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "10.0.0.0 đến 15.255.255.255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 271,
        "title": "Câu 26: Địa chỉ trang web ‘www.hubt.edu.vn’, ‘.vn’ trên địa chỉ có nghĩa là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Ký hiệu tên nước Việt Nam", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Ký hiệu nào đó", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Hiển thị thông tin tổ chức kinh doanh", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Khác", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 272,
        "title": "Câu 27: Trong chuẩn 10BaseT, chữ T viết tắt của từ nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Twisted pair", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Thinet", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Thicknet", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tall", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 273,
        "title": "Câu 28: Hãy xác định giao thức nào sau đây là một giao thức kết nối song công (Full-Duplex), đáng tin cậy và chịu trách nhiệm trong việc truyền dữ liệu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "TCP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "UDP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "IP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "ARP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 274,
        "title": "Câu 29: Chiều dài giới hạn của dây cáp xoắn nối giữa 2 thiết bị (PC, Hub, Switch…) là bao nhiêu trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "10 mét", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "50 mét", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "100 mét", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "200 mét", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 275,
        "title": "Câu 30: Hãy quan sát hình ảnh, cho biết đây là loại cáp nào trong các phương án sau đây?",
        "thumb": "assets/img/cau30.png",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Cáp UTP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cáp đồng trục", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cáp STP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cáp quang", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 276,
        "title": "Câu 31: Khi thi công giải cáp mạng (cáp xoắn đôi), hãy cho biết góc giới hạn của cáp là bao nhiêu trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "90 độ", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "45 độ", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "60 độ", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": ">90 độ", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 277,
        "title": "Câu 32: Hãy chọn tầng nào sau đây trong mô hình OSI có chức năng kiểm soát lỗi và kiểm soát luồng dữ liệu?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Tầng liên kết dữ liệu", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tầng mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tầng vật lý", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tầng vận chuyển", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 278,
        "title": "Câu 33: Hãy xác định đâu là mạng cục bộ (LAN) trong các trường hợp sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Hai máy tính, một ở Đại học Kinh Doanh và Công nghệ HN, một ở Đại học Hải Phòng được nối mạng và gửi thông tin cho nhau", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Một máy tính và một máy in trong một văn phòng, nối với nhau thông qua một Printer Switch box", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Một số máy tính đặt trong các phòng học tại khu D - Đại học Kinh Doanh và Công Nghệ HN nối cáp với nhau, chia sẻ và sử dụng chung các tài nguyên", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các máy tính trong một công ty cùng kết nối vào Internet bằng USB 3G", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 279,
        "title": "Câu 34: Việc phân loại mạng thường được tuân theo những tiêu chí nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Địa lý, kỹ thuật chuyển mạch, kiến trúc mạng và nguyên tắc quản lý", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Kỹ thuật chuyển mạch, kiến trúc mạng, nguyên tắc quản lý và hệ điều hành mạng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Hệ điều hành, kỹ thuật chuyển mạch và nguyên tắc quản lý", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Địa lý, kiến trúc mạng và nguyên tắc quản lý", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 280,
        "title": "Câu 35: Hệ thống mạng của Trường Đại Học Kinh Doanh và Công nghệ Hà nội đang sử dụng một địa chỉ mạng lớp C, khi cần chia 12 subnets thì ta phải dùng Subnet Mask nào trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255.255.255.240", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.255.0", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.12.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.12", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 281,
        "title": "Câu 36: Hãy xác định độ dài của địa chỉ MAC là bao nhiêu trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "24 bits", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "48 bits", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "8 bits", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "36 bits", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 282,
        "title": "Câu 37: Phương pháp thẻ bài trong mạng Token Ring hoạt động hiệu quả ở điều kiện nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Tải nhẹ", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tải nặng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tắc nghẽn đường truyền", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Có xung đột", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 283,
        "title": "Câu 38: Hãy chọn phương án đúng cho biết một địa chỉ mạng lớp C được phép mượn tối đa bao nhiêu bit cho Subnet?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "2 bits", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "8 bits", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "4 bits", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "6 bits", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 284,
        "title": "Câu 39: Theo chuẩn T568B của cáp xoắn đôi UTP (Unshielded Twisted Pair), hãy xác định dây Xanh dương nằm ở chân số mấy trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Số 5", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Số 6", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Số 3", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Số 4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 285,
        "title": "Câu 40: Hãy xác định cổng giao tiếp SC (Subscriber Connector) nối Card mạng với loại cáp nào trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Cáp Quang", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cáp Đồng trục gầy", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cáp Xoắn đôi", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cáp Đồng trục béo", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 286,
        "title": "Câu 41: Hãy xác định giao thức UDP được sử dụng cho các ứng dụng nào trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Các ứng dụng không yêu cầu độ tin cậy cao", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Các ứng dụng yêu cầu kiểm soát luồng và kiểm soát lỗi", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Các ứng dụng yêu cầu độ tin cậy cao", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Các ứng dụng không yêu cầu liên kết vật lý", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 287,
        "title": "Câu 42: Hãy chọn phương án nào sau đây cho biết chức năng chính của giao thức ICMP trong bộ giao thức TCP/IP?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Kiểm soát luồng dữ liệu truyền trên mạng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Thông báo lỗi và các thông tin trạng thái khác", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Định hướng tìm đường cho gói tin", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Hiển thị thông tin các gói tin không theo thứ tự", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 288,
        "title": "Câu 43: Trong mô hình TCP/IP, giao thức nào dùng để tìm địa chỉ MAC khi biết địa chỉ IP trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "ARP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "TCP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "UDP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "RARP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 289,
        "title": "Câu 44: Dùng phương pháp bấm cáp xoắn - chéo giữa hai thiết bị nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Hub - Hub", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Modem - Pc", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Hub - Nic", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Switch - PC", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 290,
        "title": "Câu 45: Giao thức OSPF hoạt động theo phương thức định tuyến nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Vector khoảng cách", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Trạng thái liên kết", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Định tuyến tĩnh", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 291,
        "title": "Câu 46: Hãy xác định đâu là Subnet mask của địa chỉ mạng lớp C trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255.255.255.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.0.0", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.0.0.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "225.255.255.255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 292,
        "title": "Câu 47: Một mạng sử dụng địa chỉ lớp B cần chia thành 9 mạng con, hãy xác định Subnet mask là gì trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255.255.240.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.0.0.255", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.224.255.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.224", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 293,
        "title": "Câu 48: Hãy xác định cổng giao tiếp RJ-45 (Registered Jack – 45) nối Card mạng với loại cáp nào trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Cáp Đồng trục gầy", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cáp Quang", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Cáp Xoắn đôi", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Cáp Đồng trục béo", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 294,
        "title": "Câu 49: Hãy chọn phương án đúng nào sau đây cho biết địa chỉ Broadcast của lớp C?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "221.218.2.255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "190.44.255.255", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "129.219.145.255", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "190.12.2.255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 295,
        "title": "Câu 50: Hãy xác định địa chỉ IP nào sau đây là địa chỉ quảng bá nội bộ cho một mạng bất kỳ?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "10.16.1.255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "230.20.30.255", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.255.255", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "12.255.255.255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 296,
        "title": "Câu 51: Hãy xác định các giao thức RIP, OSPF hoạt động ở tầng nào trong mô hình TCP/IP trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Application layer", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Network layer", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Transport layer", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Presentation layer", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 297,
        "title": "Câu 52: Subnet Mask mặc định của địa chỉ 112.50.30.4 là gì trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "255.255.255.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.0.0.0", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.0.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 298,
        "title": "Câu 53: Hãy cho biết địa chỉ 182.18.8.1 thuộc lớp nào trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Lớp C", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Lớp B", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Lớp D", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Lớp A", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 299,
        "title": "Câu 54: Một mạng lớp B mượn 5 bit để chia subnet, hãy xác định Subnet mask của mạng là bao nhiêu trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255.255.248.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.255.1", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.255.248", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.128", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 300,
        "title": "Câu 55: Để chia thành 5 mạng con của 1 địa chỉ lớp C, ta sử dụng Subnet Mask nào trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "255.255.224.255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.255.224", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.0.0.224", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.225.255.0", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 301,
        "title": "Câu 56: Hãy xác định phương thức định tuyến nào sau đây có thể tính toán đường đi ngắn nhất độc lập?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Vector khoảng cách (DistanceVector)", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Trạng thái liên kết (Link state)", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Không tồn tại phương thức này", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Định tuyến tĩnh (Static routing)", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 302,
        "title": "Câu 57: Hãy xác định chiều dài giới hạn của các dây cáp xoắn đôi khi tách xoắn là bao nhiêu trong các phương án sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "5 cm", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "10cm", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "< 5cm", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "20 cm", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 303,
        "title": "Câu 59: Đâu là subnet mask của lớp C?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255.255.255.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.0.0", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.0.0.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "225.255.255.255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 304,
        "title": "Câu 60: Địa chỉ nào được dành riêng cho những chức năng Loopback cục bộ?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "121.0.0.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "0.0.0.0", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "1.0.0.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "127.0.0.0", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 305,
        "title": "Câu 61: Địa chỉ 19.219.255.255 là địa chỉ gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Broadcast lớp A", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Broadcast lớp B", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Subnet mask lớp A", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Subnet mask lớp B", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 306,
        "title": "Câu 62: Một mạng con lớp A mượn 1 bit để chia Subnet thì Subnet Mask sẽ là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "255.255.128.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.255.240", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.128.0.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.128.0", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 307,
        "title": "Câu 63: Trong địa chỉ lớp B, một mạng cần chia thành 9 mạng con, sử dụng Subnet mask là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255.255.240.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.0.0.255", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.224.255.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.224", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 308,
        "title": "Câu 64: Địa chỉ lớp C được phép mượn tối đa bao nhiêu bit cho Subnet?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "8", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "4", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "6", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 309,
        "title": "Câu 65: Trong địa chỉ lớp C, một mạng cần chia thành 3 mạng con thì phải sử dụng Subnet Mask nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "255.255.224.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.255.224", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.0.0.255", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.1", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 310,
        "title": "Câu 66: Địa chỉ Broadcast của lớp C là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "221.218.2.255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "190.44.255.255", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "129.219.145.255", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "190.12.2.255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 311,
        "title": "Câu 67: Địa chỉ lớp B được phép mượn tối đa bao nhiêu bit cho Subnet?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "14", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "8", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "6", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "2", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 312,
        "title": "Câu 68: Địa chỉ IP nào sau đây là địa chỉ quảng bá cho một mạng bất kỳ?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "10.16.1.255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "230.20.30.255", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.255.255", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "12.255.255.255", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 313,
        "title": "Câu 69: Phương thức nào cho phép thiết bị Router truyền bảng chỉ đường của mình cho các router khác cập nhật?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Vector khoảng cách", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Trạng thái liên kết", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Không tồn tại phương thức này", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Định tuyến tĩnh", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 314,
        "title": "Câu 70: Trong mô hình OSI, thiết bị nào hoạt động ở tầng vật lý?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Modem", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Switch", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Repeater", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Bridge", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 315,
        "title": "Câu 71: Giao thức định tuyến nào tính toán đường đi ngắn nhất độc lập?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Link state", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "DistanceVector", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Không có phương thức nào", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Static routing", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 316,
        "title": "Câu 72: Chức năng chung của các giao thức định tuyến là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Lựa chọn đường đi được coi là 'ngắn nhất'", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tất cả đều đúng", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Gửi gói tin trên mạng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Trao đổi thông tin định tuyến", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 317,
        "title": "Câu 73: Trong mô hình TCP/IP, giao thức TCP hoạt động cùng tầng với các giao thức nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "UDP", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "ARP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "IP", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "FTP", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 318,
        "title": "Câu 74: Xác định Mask default của địa chỉ 122.50.30.4 là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "255.255.255.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.0.0.0", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.0.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 319,
        "title": "Câu 75: Mỗi mạng muốn hoạt động trong môi trường liên mạng thì cần phải đăng ký gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Một địa chỉ mạng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Một địa chỉ IP", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Một địa chỉ IPX", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Một địa chỉ default gateway", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 320,
        "title": "Câu 76: Chọn một phát biểu đúng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Mỗi thiết bị trong mạng có một địa chỉ IP cố định", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Địa chỉ IP được thiết lập từ nhà sản xuất", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Địa chỉ IP là duy nhất trong một hệ thống mạng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Mỗi card mạng có một địa chỉ IP cố định", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 321,
        "title": "Câu 77: Địa chỉ IP 190.50.1.2?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Thuộc lớp C", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Thuộc lớp B", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là địa chỉ riêng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Thuộc lớp A", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 322,
        "title": "Câu 78: Địa chỉ nào sau đây thuộc lớp A?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "100.1.1.10", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "192.34.14.10", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "140.8.8.8", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "20.5.6.7", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 323,
        "title": "Câu 79: Địa chỉ 172.18.8.1 thuộc lớp nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Lớp C", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Lớp B", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Lớp D", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Lớp A", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 324,
        "title": "Câu 80: Muốn chia sẻ ẩn một thư mục nằm trong ổ đĩa với tên MangMayTinh, trong ô share name, ta nhập chuỗi ký tự nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "MangMayTinh #", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "MangMayTinh\\", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "MangMayTinh%", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "MangMayTinh$", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 325,
        "title": "Câu 81: Một mạng con lớp B mượn 5 bit để chia subnet thì Subnet mask là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255.255.248.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.255.1", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.255.248", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.128", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 326,
        "title": "Câu 82: Một mạng con lớp B mượn 7 bit để chia subnet thì sử dụng Subnet mask nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "255.255.254.0", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.254.1", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.255.240", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.254", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 327,
        "title": "Câu 83: Một mạng có địa chỉ lớp B cần chia thành 3 mạng con, ta sử dụng Subnet mask nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "255.0.0.255", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "255.255.1.0", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "255.255.224.0", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "255.255.255.224", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 328,
        "title": "Câu 84: Giao thức RIP hoạt động theo phương thức định tuyến nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Vector khoảng cách", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Trạng thái liên kết", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Định tuyến tĩnh", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 329,
        "title": "Câu 85: IEEE được viết tắt của cụm từ nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Institute of Electrical and Electronics Engineers", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Institute of Electrical and Electronics Editting", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Internation of Electrical and Electronics Engineers", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Institute Electrical and Electronics Engineers", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 330,
        "title": "Câu 86: CIDR viết tắt của cụm từ nào sau đây?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Classless Inter Domain Routing", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Classless Inter Dos Routing", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Class Inter Domain Routing", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Clear Inter Domain Routing", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 331,
        "title": "Câu 87: Một địa chỉ IP được viết 200.23.16.0/23 có ý nghĩa gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Sử dụng 23 bit cho Net Id", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Sử dụng 23 bit cho Host Id", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Không thể viết dưới dạng địa chỉ đó", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "200.23.16.0 là địa chỉ mạng, 23 là địa chỉ máy", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 332,
        "title": "Câu 88: Địa chỉ mạng con (Subnet Address) được sử dụng từ năm nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "1984", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "1985", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "1990", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "1995", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 333,
        "title": "Phần 1 - Câu 1: Phân loại theo khu vực địa lý thì có mấy loại mạng máy tính?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "4", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "1", "url_thumb": ""}
        ]
    },
    {
        "id": 334,
        "title": "Phần 1 - Câu 2: Mạng cục bộ 'LAN' được viết tắt cho cụm từ nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Local Area Network", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Local Area Connection", "url_thumb": "","type": ""},
            {"idResult": 2, "value": "Local Area Name", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Local Area Net", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 335,
        "title": "Phần 1 - Câu 3: Chọn định nghĩa đúng nhất về mô hình mạng ngang hàng (Peer to Peer)?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Mạng ngang hàng cung cấp kết nối cơ bản giữa các máy tính, trong đó có 1 máy tính đóng vai trò phục vụ", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Mạng ngang hàng cung cấp kết nối cơ bản giữa các máy tính nhưng không có máy tính nào đóng vai trò phục vụ", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Mạng ngang hàng cung cấp kết nối cơ bản giữa các máy tính đóng vai trò client", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Mạng ngang hàng cung cấp kết nối cơ bản giữa các máy tính đóng vai trò Server", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 336,
        "title": "Phần 1 - Câu 4: Các trạm hoạt động trong một mạng vừa như máy phục vụ (Server) vừa như máy khách (Client) có thể tìm thấy ở mạng nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Client - Server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Ethernet", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Peer to Peer", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "LAN", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 337,
        "title": "Phần 1 - Câu 5: Mô hình mạng nào có máy phục vụ cung cấp các tài nguyên và dịch vụ cho các máy khách trong mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Client - Server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Ethernet", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Peer to Peer", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "LAN", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 338,
        "title": "Phần 1 - Câu 6: Topo mạng cục bộ nào mà tất cả các trạm phân chia chung một đường truyền chính?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Star", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Bus", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Ring", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Hybird", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 339,
        "title": "Phần 1 - Câu 7: Có những hình trạng mạng Lan thông dụng (Topology Lan) nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Client - Server", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Ethernet", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Peer to Peer", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Ring, Star, Bus", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 340,
        "title": "Phần 1 - Câu 8: Công nghệ mạng Lan nào sử dụng phổ biến hiện nay?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Token ring", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Ethernet", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "ADSL", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "FDDI", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 341,
        "title": "Phần 1 - Câu 9: Hiện nay có những loại đường truyền nào trong mạng LAN?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Cáp đồng trục, cáp xoắn đôi", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Cáp quang, sóng vô tuyến", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Sóng viba, hồng ngoại, sóng vô tuyến (radio)", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tất cả các đáp án trên", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 342,
        "title": "Phần 1 - Câu 10: Có mấy loại kỹ thuật chuyển mạch trong mạng LAN?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "2", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "4", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 343,
        "title": "Phần 1 - Câu 11: Phương pháp đa truy nhập sử dụng sóng mang có phát hiện xung đột CSMA/CD, trong đó 'CSMA/CD' được viết tắt cho cụm từ nào?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Carrier Sense Multiple Access With Collision Detection", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Control Sense Multiple Access With Collision Detection", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Carrier Sense Multiple Access With Control Data", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Carrier Sense Multiple Access With Collision Data", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 344,
        "title": "Phần 1 - Câu 12: Có mấy loại chuẩn hóa mạng?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "1", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "4", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "2", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 345,
        "title": "Phần 1 - Câu 13: Mô hình tham chiếu OSI có mấy lớp?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "3", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "7", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "4", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "5", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 346,
        "title": "Phần 1 - Câu 14: Lớp nào cung cấp các phương tiện để người sử dụng có thể truy nhập được vào môi trường OSI và cung cấp các dịch vụ thông tin phân tán?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Transport", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Presentation", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Session", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Application", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 347,
        "title": "Phần 1 - Câu 15: Tầng 2 trong mô hình OSI tách luồng bit từ tầng vật lý chuyển lên thành?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Frame", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Segment", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Packet", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "PSU", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 348,
        "title": "Phần 1 - Câu 16: Các đơn vị dữ liệu trong giao thức lớp 2 của mô hình OSI được gọi là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Segment", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Frame", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Packet", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "PSU", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 349,
        "title": "Phần 1 - Câu 17: Các đơn vị dữ liệu trong giao thức lớp 3 của mô hình OSI được gọi là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 2,
        "results": [
            {"idResult": 0, "value": "Segment", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Frame", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Packet", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "PSU", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 350,
        "title": "Phần 1 - Câu 18: Các đơn vị dữ liệu trong giao thức lớp 7 của mô hình OSI được gọi là?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 3,
        "results": [
            {"idResult": 0, "value": "Segment", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Frame", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Packet", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Data", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 351,
        "title": "Phần 1 - Câu 19: Thiết bị chọn đường (Router) hoạt động ở lớp nào trong mô hình OSI?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 0,
        "results": [
            {"idResult": 0, "value": "Tầng mạng (Network Layer)", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Tầng liên kết dữ liệu (Data Link Layer)", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Tầng vận chuyển (Transport Layer)", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Tầng ứng dụng (Application Layer)", "url_thumb": "", "type": ""}
        ]
    },
    {
        "id": 352,
        "title": "Phần 1 - Câu 20: IEEE là gì?",
        "thumb": "",
        "isCorrect": true,
        "idCorrectResult": 1,
        "results": [
            {"idResult": 0, "value": "Là tổ chức quản lý tên miền trên mạng", "url_thumb": "", "type": ""},
            {"idResult": 1, "value": "Là tổ chức trong lĩnh vực chuẩn hóa mạng cục bộ", "url_thumb": "", "type": ""},
            {"idResult": 2, "value": "Là tổ chức quản lý các chuẩn giao thức mạng", "url_thumb": "", "type": ""},
            {"idResult": 3, "value": "Là tổ chức trong lĩnh vực cấp phép sản xuất thiết bị mạng", "url_thumb": "", "type": ""}
        ]
    },

            
            ]

        
        


    },
};

export default questions;
