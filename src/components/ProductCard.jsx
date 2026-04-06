import React, { useState } from "react";
import { Card, Tag, Typography } from "antd";
import {
  ShoppingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Text, Title: TypographyTitle } = Typography;

const ProductCard = ({ product }) => {
  const [imgSrc, setImgSrc] = useState(product.image);
  const getFallbackImage = () => {
    const fallbacks = {
      1: "https://picsum.photos/300/200?random=1",
      2: "https://picsum.photos/300/200?random=2",
      3: "https://picsum.photos/300/200?random=3",
    };
    return (
      fallbacks[product.categoryId] || "https://picsum.photos/300/200?random=4"
    );
  };

  const handleImageError = () => {
    setImgSrc(getFallbackImage());
  };

  return (
    <Card
      hoverable
      style={{ width: 300, height: 420 }}
      cover={
        <div style={{ height: 200, overflow: "hidden" }}>
          <img
            alt={product.title}
            src={imgSrc}
            onError={handleImageError}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      }
      actions={[
        <ShoppingOutlined key="buy" />,
        product.inStock ? (
          <CheckCircleOutlined key="stock" style={{ color: "#52c41a" }} />
        ) : (
          <CloseCircleOutlined key="stock" style={{ color: "#f5222d" }} />
        ),
      ]}
    >
      <Meta
        title={
          <div>
            <TypographyTitle level={5} style={{ margin: 0 }}>
              {product.title}
            </TypographyTitle>
            <Text strong style={{ color: "#1890ff", fontSize: 18 }}>
              ${product.price}
            </Text>
          </div>
        }
        description={
          <div>
            <Text
              type="secondary"
              style={{ display: "block", marginBottom: 8 }}
            >
              {product.description}
            </Text>
            <Tag color={product.inStock ? "success" : "error"}>
              {product.inStock ? "В наличии" : "Нет в наличии"}
            </Tag>
          </div>
        }
      />
    </Card>
  );
};

export default ProductCard;
