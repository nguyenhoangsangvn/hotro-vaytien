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
			<title>Tư vấn tài chính miễn phí</title>
		</Head>

		{/*100% Không phí trước sau + Banner */} 
		<Row className='justify-content-center'>
      		<Row style={{marginBottom:'30px'}}>	
			<p></p>	
			  <h1 style={{textAlign:'center', fontSize: '22px', color:'black'}}><b>100% KHÔNG PHÍ TRƯỚC SAU</b></h1>		
				<a  href="#" target="_blank">
					<Card.Img variant="top" src="/image/mcredit_baner-min.png" />
				</a>
			</Row>

			{/*Xin chào + Buttom BẮT ĐẦU NGAY */} 
			<Row style={{marginBottom:'30px'}}>
				<Alert variant="light">
					<Alert.Heading>Xin chào!</Alert.Heading>
					Bấm <b>BẮT ĐẦU NGAY</b> để tìm kiếm các khoản vay phù hợp với bạn.
					<p>Chúng tôi sẽ dựa trên thông tin mà bạn cung cấp để tìm ra gói vay thích hợp với bạn nhất</p>	


				</Alert>		
				<Row  className='justify-content-center'>
					<Col sm={3} xs={8}>
						<Row>
							<Button variant="primary" href='https://shorten.asia/bkT8ggUr' target="_blank" fontSize="18px" >BẮT ĐẦU NGAY</Button>							
						</Row>
					</Col>
				</Row>
			</Row>
			<hr/> {/*DẤU GẠCH */} 

			{/*TIÊU ĐỀ 1*/} 
			<Row className="justify-content-center" >
				<Alert.Heading variant='light'>
					<a style={{fontSize:'16px', textDecoration:'none' }}>1. Các gói vay bằng CMND và ATM 👇</a>
					<p class="text-danger" style={{fontSize:'14px'}}>Lưu ý: Chọn gói vay nào thì bấm vào ảnh của gói vay đó để lên hồ sơ</p>
				</Alert.Heading>
			</Row>

			{/*Mở thẻ MB Bank*/} 
			<Row className="justify-content-center" style={{marginBottom:'20px'}}>		
			<Alert.Heading variant='light'>
				</Alert.Heading>	
				<a  href="https://l.linklyhq.com/l/um7U" target="_blank">
					<Card.Img variant="top" src="/image/MB.png" />
				</a>
			</Row>

			{/*4 GÓI VAY > 10 TRIỆU*/} 
			<Row style={{marginBottom:'50px'}} className="justify-content-center">
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://shorten.asia/7qZNtPkh " target="_blank">
						<Figure.Image alt="165x165" src="/image/10TRIEU.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://shorten.asia/FGkQtTdv " target="_blank">
							<Figure.Image alt="165x165" src="/image/20TRIEU.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://shorten.asia/DQ2p496d " target="_blank">
							<Figure.Image alt="165x165" src="/image/30TRIEU.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://shorten.asia/TK9P1DfQ" target="_blank">
							<Figure.Image alt="165x165" src="/image/50TRIEU.png"/>
						</a>
					</Row>
				</Col>
<p></p>
<p></p>
<p></p>
			{/*GÓI VAY <5 TRIỆU*/}
			<Row style={{marginBottom:'5px'}} className="justify-content-md-center">			
			<Alert.Heading variant='light'>
					<a style={{fontSize:'16px', textDecoration:'none'}}>2. Các khoản vay nhanh dưới 5 triệu👇 </a>
					<p class="text-danger" style={{fontSize:'14px'}}>Lưu ý: Chọn gói vay nào thì bấm vào ảnh của gói vay đó để lên hồ sơ</p>					
				</Alert.Heading>	
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://shorten.asia/7qZNtPkh" target="_blank">
							<Figure.Image alt="165x165" src="/image/1T.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://shorten.asia/FGkQtTdv" target="_blank">
							<Figure.Image alt="165x165" src="/image/2T.png"/>
						</a>
					</Row>
				</Col>
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://shorten.asia/TK9P1DfQ" target="_blank">
							<Figure.Image alt="165x165" src="/image/3TRIEU.png"/>
						</a>
					</Row>
				</Col>				
				<Col sm={3} xs={6}>
					<Row>
						<a  href="https://shorten.asia/DQ2p496d" target="_blank">
							<Figure.Image alt="165x165" src="/image/5TRIEU.png"/>
						</a>
					</Row>
				</Col>
			</Row>		
		</Row>

			{/*MỞ THẺ ATM*/}	
			<Row style={{marginBottom:'5px'}} className="justify-content-md-center">			
			<Alert.Heading variant='light'>
					<a style={{fontSize:'16px', textDecoration:'none'}}>3. Mở tài khoản NH (ATM) miễn phí👇</a>
					<p class="text-danger" style={{fontSize:'14px'}}>Lưu ý: Chọn Ngân hàng và bấm vào ảnh của Ngân hàng đó để Đăng ký</p>					
				</Alert.Heading>	
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
						<a  href="https://l.linklyhq.com/l/um7U " target="_blank">
							<Figure.Image alt="165x165" src="/image/KREDIVO.png"/>
						</a>
					</Row>
				</Col>
			</Row>		
		</Row>
		<Row className="justify-content-center" style={{marginBottom:'50px'}}>		
			<Alert.Heading variant='light'>
				</Alert.Heading>	
				<a  href="#" target="_blank">
					<Card.Img variant="top" src="/image/home-banner.png" />
				</a>
			</Row>
	</Container>
  )
}
