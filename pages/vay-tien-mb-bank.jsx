import Head from 'next/head'
import React from 'react'
import { Row, Container, Button, Col, Alert,Card } from 'react-bootstrap'
import { Figure } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

export default function Home() {
  return (
    <Container>
		<Head>
			<meta charset='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<link rel="icon" href="/logo.png" />
			<title>Vay tiền nhanh MB Bank</title>
		</Head>

		{/*100% Không phí trước sau + Banner */} 
		<Row className='justify-content-center'>
      		<Row style={{marginBottom:'5px'}}>	
				<a  href="#" target="_blank">
					<Card.Img variant="top" src="/image/VAY-MB.png" />
				</a>
			</Row>

			{/*GIỚI THIỆU*/} 
			<Row style={{marginBottom:'5px'}} className="justify-content-md-center">
				<Alert.Heading variant='light'>
					<Alert.Heading style={{fontSize:'18px', fontWeight:'bolder'}}>Giới thiệu!</Alert.Heading>
            <>
                    {[       
                    'danger'
                    ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                    <a style={{textAlign:'center', fontSize:'15px', color:'black'}}>Sản phẩm Vay siêu nhanh - <b>Thấu chi không tài sản bảo đảm:</b> Là sản phẩm cho vay theo phương thức cấp Hạn mức thấu chi (HMTC) cho mục đích tiêu dùng cá nhân và không có tài sản bảo đảm, dành cho <b>Khách hàng cá nhân có Tài khoản thanh toán tại MB</b> và <b>đáp ứng các điều kiện của MB</b></a>
                    </Alert>
                    ))}
            </>                    
            <a style={{fontSize:'16px', textDecoration:'none'}}>Theo đó, căn cứ trên đề nghị cấp Hạn mức thấu chi của Khách hàng (KH) qua (các) kênh số, MB sẽ thẩm định, phê duyệt và thực hiện cấp cho Khách hàng HMTC trên tài khoản thanh toán của KH. Các thỏa thuận về đề nghị vay vốn, hợp đồng cho vay được thực hiện trực tuyến trên kênh số.</a>   
          </Alert.Heading>				
			</Row>	
		</Row>

        {/*ẢNH + NÚT BẤM HỖ TRỢ MỞ TÀI KHOẢN */}
    <Card style={{ width: '22rem', margin:'0', marginBottom:'50px' }}>
    <Card.Img variant="top" src="image/NHMB.jpeg" />
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}><b>NGÂN HÀNG TMCP QUÂN ĐỘI</b></Card.Title>
        <Card.Text style={{fontSize:'14px'}}>
          Có hệ thống phòng giao dịch trên khắp cả nước.
          Miễn phí mở thẻ và phí thường niên.
        </Card.Text>
        <Button variant="danger" href="https://l.linklyhq.com/l/um7U" style={{fontSize:'15px'}}>HỖ TRỢ MỞ TÀI KHOẢN</Button>
      </Card.Body>
    </Card>

    {/*TIỆN ÍCH */}
    <Row style={{marginBottom:'5px'}} className="justify-content-md-center">
				<Alert.Heading variant='light'>
					<Alert.Heading style={{fontSize:'18px', fontWeight:'bolder'}}>Tiện ích</Alert.Heading>                   
            <a style={{fontSize:'16px', textDecoration:'none'}}>
            <p>- Không cần tài sản bảo đảm thế chấp cho khoản vay</p>
            <p>- Giao dịch vay vốn siêu nhanh và an toàn trên App ngân hàng MBBank</p>
            <p>- Truy vấn thông tin khoản vay dễ dàng, nhanh chóng trên APP ngân hàng MBBank</p>
            <p>- Hoàn toàn chủ động trả nợ trước hạn miễn phí bất kỳ lúc nào trên App ngân hàng MBBank</p>
            </a>   
          </Alert.Heading>				
			</Row>

       {/*Hạn mức và biếu phí*/}
    <Row style={{marginBottom:'5px'}} className="justify-content-md-center">
				<Alert.Heading variant='light'>
					<Alert.Heading style={{fontSize:'18px', fontWeight:'bolder'}}>Hạn mức và Biểu phí</Alert.Heading>                   
            <a style={{fontSize:'16px', textDecoration:'none'}}>            
            <p>- Thời gian vay tối đa: 12 tháng</p>
            <p>- Lãi suất cho vay: Theo quy định của MB từng thời kỳ</p>
            <p>- Phương thức tính lãi: Trả lãi theo số tiền và thời gian thực tế vay</p>
            <p>- Hạn mức: Giá trị tối thiểu 5.000.000 VND (năm triệu đồng) và tối đa 50.000.000 VND (năm mươi triệu đồng).</p>
            </a>   
          </Alert.Heading>				
			</Row>

      {/*Thủ tục và điều kiện đăng ký*/}
    <Row style={{marginBottom:'5px'}} className="justify-content-md-center">
				<Alert.Heading variant='light'>
					<Alert.Heading style={{fontSize:'18px', fontWeight:'bolder'}}>Hạn mức và Biểu phí</Alert.Heading>                   
            <a style={{fontSize:'16px', textDecoration:'none'}}>  
            <p style={{fontSize:'16px', textDecoration:'none', color:'blue'}}>Điều kiện</p>          
            <p>- Khách hàng thỏa mãn ít nhất 1 trong 2 nhóm điều kiện sau:</p>
             <p>▶️<i>Nhóm 1:</i> Tài khoản thanh toán của KH đã mở tại MB đáp ứng thời hạn duy trì và các điều kiện khác theo quy định sản phẩm từng thời kỳ</p>
             <p>▶️<i>Nhóm 2:</i> KH được trả lương qua tài khoản thanh toán tại MB đáp ứng quy định sản phẩm từng thời kỳ</p>
            <p>- Khách hàng không có nợ nhóm 2 trở lên tại thời điểm đề nghị vay vốn trong 12 tháng gần nhất</p>
            <p>- Khách hàng không có dư nợ tín chấp, hạn mức thấu chi tín chấp và thẻ tín dụng tín chấp tại MB</p>
            <p>- Tài sản bảo đảm: Tín chấp (Không yêu cầu tài sản bảo đảm)</p>
            </a>   
          </Alert.Heading>				
			</Row>

      {/*ẢNH + NÚT BẤM HỖ TRỢ MỞ TÀI KHOẢN */}
    <Card style={{ width: '22rem', margin:'0', marginBottom:'50px' }}>
    <Card.Img variant="top" src="image/mbbank-10-1.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}><b>NGÂN HÀNG TMCP QUÂN ĐỘI</b></Card.Title>
        <Card.Text style={{fontSize:'14px'}}>
          Có hệ thống phòng giao dịch trên khắp cả nước.
          Miễn phí mở thẻ và phí thường niên.
        </Card.Text>
        <Button variant="danger" href="https://l.linklyhq.com/l/um7U" style={{fontSize:'15px'}}>HỖ TRỢ MỞ TÀI KHOẢN</Button>
      </Card.Body>
    </Card>
	</Container>
  )
}
