import { Button, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchButton() {
  return (
    <Row gutter={[16, 16]} style={{ marginLeft: 10 }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={16}>
        <Input
          placeholder="Search ID, name, mobile number, email"
          style={{
            width: "100%",
            maxWidth: "350px",
            padding: 10,
            borderRadius: "10px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          suffix={<SearchOutlined style={{ fontSize: "22px" }} />}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <div style={{ textAlign: "right" }}>
          <Button
            disabled
            style={{
              height: 40,
              width: 85,
              padding: 8,
              marginRight: 10,
              marginTop: "20px",
            }}
          >
            Export
          </Button>
          <Button
            style={{
              height: 40,
              width: 120,
              padding: 8,
              background: "#e8f2ff",
              color: "#1c8af5",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Export All Data
          </Button>
        </div>
      </Col>
    </Row>
  );
}
