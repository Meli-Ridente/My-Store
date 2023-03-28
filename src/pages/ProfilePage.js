import { Container } from "react-bootstrap";
import { UserOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProfilePage () {
  const user = useSelector((state) => state.FormValidation.user)
  const [t, i18n] = useTranslation("global")

  const { Meta } = Card;
  // if(user === undefined){
  //   return (
  //     <Navigate to='/login' replace></Navigate>
  //   )
  // }
  return( 
    <>
    {user && (
      <div className="CardUser">
        <p style={{fontSize: '25px'}}>{t("Profile.welcome")}</p>
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
          {user.age}
      </Card>
    </div> 
    )}
    </>
  )
}