import { Container } from "react-bootstrap";
import { UserOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

export default function ProfilePage () {
  const user = useSelector((state) => state.FormValidation.user)
  const { Meta } = Card;
  return (
    <div className="CardUser">
      <p style={{fontSize: '25px'}}>Welcome Back!</p>
      <img alt="example" src={user.image} />
      {user.age}
    {/* <Card
      hoverable
      style={{
        width: 240,
      }}
        cover={<img alt="example" src={user.image} />}
      >
        <Meta title={user.firstName + ' ' + user.lastName} style={{textTransform: 'capitalize'}}
        description= {user.gender}></Meta>
        {user.gender === 'female' ? <WomanOutlined /> : <ManOutlined />  }
        {user.age}
    </Card> */}
  </div>
  )
}