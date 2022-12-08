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
                    <hr/>
                    <Button variant="danger" href="https://l.linklyhq.com/l/um7U" style={{fontSize:'15px'}}>Hỗ trợ mở tài khoản</Button>
                    </Alert>
                    ))}
            </>
          </Alert.Heading>				
			</Row>	
		</Row>

        {/*ẢNH + NÚT BẤM HỖ TRỢ MỞ TÀI KHOẢN */}
    <Card style={{ marginBottom:'50px' }}>
    
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}><b>Gói O1</b></Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
          Có hệ thống phòng giao dịch trên khắp cả nước.
          Miễn phí mở thẻ và phí thường niên.
        </Card.Text>
        
        <a variant="danger" href="https://l.linklyhq.com/l/um7U" style={{fontSize:'15px', textDecoration:'none'}}>Đăng ký vay tại đây ...</a>
      </Card.Body>
    </Card>
      {/*ẢNH + NÚT BẤM HỖ TRỢ MỞ TÀI KHOẢN */}
    <Card style={{marginBottom:'50px' }}>
    <Card.Img variant="top" src="image/VAY-MB.png" />
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}><b>Ngân hàng TMCP Quân Đội</b></Card.Title>
        <Card.Text style={{fontSize:'14px'}}>
          Có hệ thống phòng giao dịch trên khắp cả nước.
          Miễn phí mở thẻ và phí thường niên.
        </Card.Text>
        <Button variant="danger" href="https://l.linklyhq.com/l/um7U" style={{fontSize:'15px'}}>Hỗ trợ mở tài khoản</Button>
      </Card.Body>
    </Card>

	</Container>
  )
}
