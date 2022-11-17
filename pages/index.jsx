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
					Bấm bắt đầu ngay để tìm kiếm các khoản vay phù hợp với bạn.
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
<Row>
<h1 className={styles.tt3}>1. Các khoản vay nhanh không cần tư vấn 👇</h1>
<h7 className={styles.luuy}>Lưu ý: Chọn gói vay nào thì bấm vào Chọn khoản vay đó để lên hồ sơ</h7>
</Row>
{/*4 GÓI VAY > 10 TRIỆU*/} 					
<Row xs={1} md={4} className="g-4">
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/dtd.jpg"/>
      <Card.Body>
        <Card.Title className={styles.font}><b>VAY 10.000.000</b></Card.Title>
        <Card.Text className={styles.chitiet}>
		👉 Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥12 Tháng: Góp 894K/O1 tháng<br/>
		🔥24 Tháng: Góp 477K/O1 tháng<br/>
		🔥36 Tháng: Góp 289K/O1 tháng<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/7qZNtPkh'>Chọn khoản vay này</Button> {/*Doctor Đồng*/}
      </Card.Body>

</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/20TRIEU.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>VAY 20.000.000</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
        👉 Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥12 Tháng: Góp 1.787K/O1 tháng<br/>
		🔥24 Tháng: Góp 894K/O1 tháng<br/>
		🔥36 Tháng: Góp 595K/O1 tháng<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/FGkQtTdv'>Chọn khoản vay này</Button> {/*Senmo*/}
      </Card.Body>
</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/30TRIEU.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>VAY 30.000.000</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
		👉 Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥12 Tháng: Góp 2.680K/O1 tháng<br/>
		🔥24 Tháng: Góp 1.340K/O1 tháng<br/>
		🔥36 Tháng: Góp 893K/O1 tháng<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/DQ2p496d'>Chọn khoản vay này</Button> {/*Jeff*/}
      </Card.Body>
</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/50TRIEU.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>VAY 50.000.000</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
		👉 Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥12 Tháng: Góp 4.470K/O1 tháng<br/>
		🔥24 Tháng: Góp 2.233K/O1 tháng<br/>
		🔥36 Tháng: Góp 1.490K/O1 tháng<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/3XaAt7D3'>Chọn khoản vay này</Button> {/*Robocash*/}
      </Card.Body>
</Card>
</Row>
		
<Row style={{marginBottom:'50px'}} className="justify-content-center">
<p></p>
<p></p>
<p></p>
{/*GÓI VAY <5 TRIỆU*/}
<Row>			
<h1 className={styles.tt3}>2. Các khoản vay nhanh dưới 5 triệu 👇</h1>
<h7 className={styles.luuy}>Lưu ý: Chọn gói vay nào thì bấm vào Chọn khoản vay đó để lên hồ sơ</h7>	
</Row>
<Row xs={1} md={4} className="g-4">
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/20TRIEU.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>VAY 1 - 20.000.000</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
		👉Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥Giải ngân nhanh sau 30 phút<br/>
		🔥Tỉ lệ duyệt hồ sơ 99%<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/bkT8ggUr'>Chọn khoản vay này</Button> {/*crezu*/}
      </Card.Body>
</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/1T.png"/>
      <Card.Body>
        <Card.Title className={styles.font}><b>VAY 1.000.000</b></Card.Title>
        <Card.Text className={styles.chitiet}>
		👉Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥Giải ngân nhanh sau 30 phút<br/>
		🔥Tỉ lệ duyệt hồ sơ 99%<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/7qZNtPkh'>Chọn khoản vay này</Button> {/*Doctor Đồng*/}
      </Card.Body>

</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/2T.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>VAY 2.000.000</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
	  	👉Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥Giải ngân nhanh sau 30 phút<br/>
		🔥Tỉ lệ duyệt hồ sơ 98%<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/FGkQtTdv'>Chọn khoản vay này</Button> {/*Senmo*/}
      </Card.Body>
</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/3TRIEU.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>VAY 3.000.000</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
	  	👉Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥Giải ngân nhanh sau 30 phút<br/>
		🔥Tỉ lệ duyệt hồ sơ 97%<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/TK9P1DfQ'>Chọn khoản vay này</Button> {/*Tamo*/}
      </Card.Body>
</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/5TRIEU.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>VAY 5.000.000</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
		👉Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥Giải ngân nhanh sau 30 phút<br/>
		🔥Tỉ lệ duyệt hồ sơ 99%<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/3XaAt7D3'>Chọn khoản vay này</Button> {/*robocash*/}
      </Card.Body>
</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/6trieu.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>VAY 6.000.000</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
		👉Hỗ trợ nợ xấu - Chỉ cần CMND/CCCD và ATM<br/>
		🔥Giải ngân nhanh sau 30 phút<br/>
		🔥Tỉ lệ duyệt hồ sơ 99%<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/DQ2p496d'>Chọn khoản vay này</Button> {/*jeff*/}
      </Card.Body>
</Card>
</Row>
</Row>

{/*MỞ THẺ ATM*/}	
<Row>			
	<h1 className={styles.tt3}>3. Mở tài khoản Ngân hàng (ATM) miễn phí 👇</h1>
	<h7 className={styles.luuy}>Lưu ý: Chọn Ngân hàng nào thì bấm vào ô Chọn ngân hàng này để đăng ký</h7>
<Row xs={1} md={4} className="g-4">
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/MB.png"/>
      <Card.Body>
        <Card.Title className={styles.font}><b>NGÂN HÀNG MB BANK</b></Card.Title>
        <Card.Text className={styles.chitiet}>		
		🔥Không phí duy trì và chuyển tiền<br/>
		🔥Miễn phí số tài khoản tứ quý, số tài khoản trùng số điện thoại<br/>
        </Card.Text>
        <Button variant="primary" href='https://mb.mfast.vn?saleCode=510863'>Chọn khoản vay này</Button> {/*MBBank*/}
      </Card.Body>

</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/cake.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>NGÂN HÀNG SỐ CAKE</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
		🔥Không phí duy trì và chuyển tiền<br/>
		🔥Mở tài khoản ngân hàng online. Miễn phí suốt đời, không phí phát sinh<br/>
        </Card.Text>
        <Button variant="primary" href='https://mfast.vn/cake/510863'>Chọn khoản vay này</Button> {/*Cake*/}
      </Card.Body>
</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/tnex.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>NGÂN HÀNG SỐ TNEX</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
	  	🔥Không phí duy trì và chuyển tiền<br/>
		🔥Mở tài khoản ngân hàng online. Miễn phí suốt đời, không phí phát sinh<br/>
        </Card.Text>
        <Button variant="primary" href='https://shorten.asia/7qZNtPkh'>Chọn khoản vay này</Button> {/*Tnex*/}
      </Card.Body>
</Card>
<Card style={{paddingLeft:'0',paddingRight:'0'}}>
      <Card.Img variant="top" src="/image/vpb.png" />
      <Card.Body>
	  <Card.Title className={styles.font}><b>NGÂN HÀNG VP BANK</b></Card.Title>
	  <Card.Text className={styles.chitiet}>
		🔥Hoàn tiền không giới hạn lên tới 3%. Miễn phí chuyển khoản, miễn phí dịch vụ<br/>
        </Card.Text>
        <Button variant="primary" href='https://mfast.vn/vpbank/510863'>Chọn khoản vay này</Button> {/*VP Bank*/}
      </Card.Body>
</Card>
</Row>	

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
