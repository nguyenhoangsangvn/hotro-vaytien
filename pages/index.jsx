import Head from 'next/head'
import React from 'react'
import { Row, Container, Button, Col, Alert,Card } from 'react-bootstrap'
import { Figure } from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
		<Head>
			<meta charset='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta name="google-site-verification" content="Mb0kPZVsIQfYXHWJ_CI3-6efFkKp4mv9vsvBEJAH0q0" />
			<link rel="icon" href="/logo.png" />
			<title>Tư vấn tài chính miễn phí</title>
		</Head>
		<Row className='justify-content-center'>
      		<Row style={{marginBottom:'50px'}}>	
			  <h1 style={{textAlign:'center', fontSize: '22px'}}>100% KHÔNG PHÍ TRƯỚC SAU</h1>		
				<a  href="#" target="_blank">
					<Card.Img variant="top" src="/image/mcredit_baner-min.png" />
				</a>
			</Row>
			<Row style={{marginBottom:'50px'}}>
				<Alert variant="light">
					<Alert.Heading>Xin chào!</Alert.Heading>
					Bấm <Alert.Link href="#"><b>BẮT ĐẦU NGAY </b></Alert.Link>
					để tìm kiếm khoản vay phù hợp cho bạn.
					<p>Chúng tôi sẽ dựa trên thông tin mà bạn cung cấp để tìm ra gói vay thích hợp</p>					
				</Alert>		
				<Row  className='justify-content-center'>
					<Col sm={2} xs={6}>
						<Row>
							<Button variant="danger" href='https://taichinhzz.com' target="_blank" fontSize="24px" >BẮT ĐẦU NGAY</Button>
							
						</Row>
					</Col>
				</Row>
			</Row>
			<hr />
			<Row className="justify-content-center">
				<Alert.Heading variant='light'>
					Mở tài khoản ngân hàng (ATM) miễn phí 👇
				</Alert.Heading>
			</Row>
			<Row style={{marginBottom:'50px'}} className="justify-content-center">
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://mfast.vn/tnex/510863" target="_blank">
						<Figure.Image alt="165x165" src="/image/NGAN-HANG-SO-TNEX.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://mfast.vn/cake/510863" target="_blank">
							<Figure.Image alt="165x165" src="/image/NGAN-HANG-SO-CAKE.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://mfast.vn/vpbank/510863" target="_blank">
							<Figure.Image alt="165x165" src="/image/NGAN-HANG-SO-TPBANK.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://l.linklyhq.com/l/um7U" target="_blank">
							<Figure.Image alt="165x165" src="/image/KREDIVO.png"/>
						</a>
					</Row>
				</Col>
				
			</Row>
			<Row style={{marginBottom:'50px'}}>			
				<a  href="#" target="_blank">
					<Card.Img variant="top" src="/image/home-banner.png" />
				</a>
			</Row>

			<Row style={{marginBottom:'50px'}} className="justify-content-md-center">
				<Col sm={3} xs={6}>
					<Row>
						<a  href="#" target="_blank">
							<Figure.Image alt="165x165" src="/image/VI-DIEN-TU-VNPAY.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="#" target="_blank">
							<Figure.Image alt="165x165" src="/image/NGAN-HANG-SO-TP-BANK.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="#" target="_blank">
							<Figure.Image alt="165x165" src="/image/MO-THE-TIN-DUNG.png"/>
						</a>
					</Row>
				</Col>				
				<Col sm={3} xs={6}>
					<Row>
						<a  href="#" target="_blank">
							<Figure.Image alt="165x165" src="/image/Ngan-hang-dien-tu-Techcombank.png"/>
						</a>
					</Row>
				</Col>
			</Row>		
		</Row>
	</Container>
  )
}
