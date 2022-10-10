import { ProfileBlock } from "./ProfileStyle";
import { ButtonBlock } from "./FormStyle";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Profile({ setIsEdit }) {
  return (
    <ProfileBlock>
      <h2>프로필</h2>
      <Avatar size={100} icon={<UserOutlined />} />
      <div className="textBlcok">
        <label className="label">닉네임</label>
        <span>username</span>
      </div>
      <ButtonBlock className="smallButton" onClick={() => setIsEdit(true)}>
        수정
      </ButtonBlock>
    </ProfileBlock>
  );
}

export default Profile;
