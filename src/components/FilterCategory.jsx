import React from "react";
import { Radio, Typography } from "antd";
import useProductStore from "../store/useProductStore";

const { Title } = Typography;
const FilterCategory = () => {
  const { categories, selectedCategory, setSelectedCategory } =
    useProductStore();

  return (
    <div style={{ marginBottom: 24 }}>
      <Title level={5}>Фильтр по категориям:</Title>
      <Radio.Group
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Radio value={undefined}>Все категории</Radio>
          {categories.map((category) => (
            <Radio key={category.id} value={category.id}>
              {category.title}
            </Radio>
          ))}
        </div>
      </Radio.Group>
    </div>
  );
};

export default FilterCategory();
