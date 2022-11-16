import Head from 'next/head'
import React from 'react'
import 'style.css'
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

{/*Xin chào + Buttom BẮT ĐẦU NGAY */} 
    <Row>
		<Alert variant="light">
		<h1 className='H1'>Hãy lựa chọn sản phẩm tài chính phù hợp</h1>
		<p>Bấm bắt đầy ngay để tìm kiếm thông tin khoản vay phù hợp với bạn</p>	
        <p>Chúng tôi sẽ dựa trên thông tin mà bạn cung cấp để tìm ra gói vay thích hợp với bạn nhất</p>	
		</Alert>
	</Row>


	</Container>
  )
}
