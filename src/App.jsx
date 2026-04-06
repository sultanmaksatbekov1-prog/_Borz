import React from "react";
import { Layout, Row, Col, Typography, Badge } from "antd";
import useProductStore from "./store/useProductStore";
import FilterCategory from "./components/FilterCategory";
import ProductCard from "./components/ProductCard";
import "./App.css";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const { getFilteredProducts, selectedCategory, getCategoryTitle } =
    useProductStore();
  const filteredProducts = getFilteredProducts();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fff",
          padding: "0 24px",
        }}
      >
        <Title level={3} style={{ margin: 0, color: "#1890ff" }}>
          Product Catalog
        </Title>
        <Badge
          count={filteredProducts.length}
          style={{ marginLeft: 20, backgroundColor: "#1890ff" }}
          showZero
        />
      </Header>

      <Content style={{ padding: "24px" }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={8} md={6}>
            <div style={{ background: "#fff", padding: 20, borderRadius: 8 }}>
              <FilterCategory />
            </div>
          </Col>

          <Col xs={24} sm={16} md={18}>
            <div style={{ background: "#fff", padding: 20, borderRadius: 8 }}>
              {selectedCategory && (
                <Title level={4} style={{ marginBottom: 16 }}>
                  Категория: {getCategoryTitle(selectedCategory)}
                </Title>
              )}

              {filteredProducts.length > 0 ? (
                <Row gutter={[16, 16]}>
                  {filteredProducts.map((product) => (
                    <Col key={product.id} xs={24} sm={12} lg={8}>
                      <ProductCard product={product} />
                    </Col>
                  ))}
                </Row>
              ) : (
                <div style={{ textAlign: "center", padding: "50px 0" }}>
                  <Title level={4} type="secondary">
                    Нет товаров в выбранной категории
                  </Title>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
