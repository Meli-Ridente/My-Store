import { Container } from "react-bootstrap";
import { UserOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

export default function ProfilePage () {
  const user = useSelector((state) => state.FormValidation.user)
  const { Meta } = Card;
  return (
    <div className="CardUser">
      <h1 style={{textTransform: 'capitalize'}}>{user.username}</h1>

    <Card
      hoverable
      style={{
        width: 240,
      }}
        cover={<img alt="example" src={user.image} />}
      >
        <Meta title={user.firstName + ' ' + user.lastName} style={{textTransform: 'capitalize'}}
        description= {user.gender}></Meta>
        {user.gender === 'female' ? <WomanOutlined /> : <ManOutlined />  }
    </Card>
  </div>
  )
}