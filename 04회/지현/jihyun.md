# 7장. 응용 계층, 애플리케이션에 접속하는 단계

### [HTTP 프로토콜]

- http는 80번 포트 사용함 ( 랜카드에 이미 포트마다 역할이 정해져있음)

  | 프로토콜             | 내용           | 포트 번호       |
  | -------------------- | -------------- | --------------- |
  | HTTP                 | 웹 사이트 접속 | 80              |
  | DNS                  | 이름 해석      | 53              |
  | FTP2                 | 파일 전송      | 20(데이터 전송) |
  | 21(명령과 응답 제어) |
  | SMTP                 | 이메일 송신    | 25              |
  | POP3                 | 이메일 수신    | 110             |

- HTTP Request 구조

  - HTTP는 문자 형태로 데이터 전송되고, 필요한 부분 파싱함
    ![Untitled](https://velog.velcdn.com/images/jhplus13/post/89258cfb-bde2-401f-b5f1-21833858a5a5/image.png)

  - 요청 라인
    1. 요청 메서드 : GET, POST, PUT, PATCH, DELETE, OPTIONS 등
    2. 요청 URI : 요청하는 자원의 위치
    3. HTTP프로토콜 버전 : 현재 HTTP 1.1이 가장 많이 사용되는 버전

- HTTP 1.1
  - 킵얼라이브 기능 ㅇ
    : 요청 후 수신측과 연결이 한 번 수립되면 데이터 교환을 마칠 때 까지 연결을 유지하고 데이터 교환이 끝나면 연결을 끝는 구조
    : 서버 성능 저하를 막을 수 있음
- HTTP 2.0
  - 응용계층에 바이너리 프레임을 추가됨
    : 기존 텍스트 데이터를 → 바이너리로 변환 후 데이터를 분할하여 보냄
    : 전송 속도 빠르고, 오류 발생 낮아짐
- HTTP Response 구조

  - 상태 라인 : HTTP 버전(웹 브라우저가 사용하는 프로토콜) , 서버 응답 상태(100~500)
  - 헤더
  - 바디 : 데이터 포함됨
    ![Untitled](https://velog.velcdn.com/images/jhplus13/post/b3550193-9bf4-49e8-bfd5-7850b4233189/image.png)

    <br/>
    <br/>

### [DNS서버]

- DNS(Domain Name System) : 도메인 이름과 IP주소에 대한 정보를 관리하는 시스템
- DNS 서버 : IP주소를 도메인 주소로 변경해주는 것 (서버IP주소 142.250.206.228 → www.googel.com)

- 이렇게 도메인을 계층적이게 관리함
  - 마지막 .(루트) 은 생략되있는 경우가 많음
    ![Untitled](https://velog.velcdn.com/images/jhplus13/post/8a6609e8-a720-4d91-9e42-53040ba3fd6d/image.png)
- 도메인 계층 마다 서버들이 대치가 되있음
  - 상위 서버는 하위 서버의 위치를 알고있음
    ![Untitled](https://velog.velcdn.com/images/jhplus13/post/7d771fef-cf55-495f-9175-769973dd79bb/image.png)
- DNS 질의 , DNS 동작 과정

  1. 브라우저 캐시에서 IP가 있는지 찾아봄
  2. 컴퓨터에 저장되있는 host파일과 캐시에서 IP 찾아봄
  3. DNS 서버에 물어봄 (→ 트래픽과 데이터를 분산시키기 위해 DNS서버를 분리함)<br/>

     - 권한이 없는 네임서버
       : 클라이언트와 직접적으로 통신 , 권한있는 Name Server와 통신하기 위해 있는 것임 <br/>
     - 실질적으로 IP주소를 갖고있는 Sub Domain NS까지 물어봐서 IP주소 알게됨

![Untitled](https://velog.velcdn.com/images/jhplus13/post/9c873bd2-8747-4ebd-90cf-08e9a7cb3b57/image.png)

(이미지 출처 : https://www.youtube.com/watch?v=sDXcLyrn6gU)

<br/><br/>

### [DHCP 서버]

- DHCP 서버
  - IP주소를 자동으로 관리하기 위한 것
  - 사용자들에게 IP주소를 할당하거나 회수하는 것을 자동으로 해주는 서버
  - 라우터 장치에 내장된 DHCP 기술로 인해 > 자동으로 ip주소 관리가 된다
  - DHCP 서버 동작 방법 (참조자료 : https://inpa.tistory.com/entry/WEB-🌐-DHCP-이란-무엇인가 )

<br/><br/>

### [SMTP와 POP3 프로토콜]

- 이메일 보낼 때는 : SMTP프로토콜 사용
- 수신자가 이메일 확인할 때는 : POP3/IAMP 프로토콜 사용

<img src="https://velog.velcdn.com/images/jhplus13/post/a79012cf-7c64-4ec6-b416-3ac31ca68dc7/image.png"  width="500" height="400">

<br/><br/>

### [로드 밸런서]

- 전송 계층에서의 로드 밸런서 : IP, Port 번호 기준으로 부하를 분산시킴
- 응용 예층에서의 로드 밸런서 : (URI, HTP헤더, 쿠키 등의 내용을 기준으로) 서비스별로 부하를 분산시켜줌

  - 검색,로그인,결제 등 서비스에 따라 별도의 서버에 접속 분산시킴

        <img src="https://velog.velcdn.com/images/jhplus13/post/69f1f8e2-c94b-4f6e-8065-5638639f817d/image.png"  width="500" height="400">

    (이미지 출처 : 모두의 네트워크 책)
