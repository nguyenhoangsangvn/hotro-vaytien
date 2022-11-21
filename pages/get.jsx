import Head from 'next/head'
import React from 'react'
import { Row, Container, Button, Col, Alert,Card } from 'react-bootstrap'
import { Figure } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import styles from '../styles/Home.module.css'

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
					<p>Bấm bắt đầu ngay để tìm kiếm các khoản vay phù hợp với bạn.</p>
					<p>Chúng tôi sẽ dựa trên thông tin mà bạn cung cấp để tìm ra gói vay thích hợp với bạn nhất</p>	
				</Alert>		
				<Row  className='justify-content-center'>
					<Col sm={3} xs={8}>
						<Row>
							<Button variant="primary" href='https://shorten.asia/bkT8ggUr' target="_blank" fontSize="18px" >👉 Bắt đầu ngay</Button>					
						</Row>
					</Col>
				</Row>
			</Row>
			<hr/> {/*DẤU GẠCH */} 

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
