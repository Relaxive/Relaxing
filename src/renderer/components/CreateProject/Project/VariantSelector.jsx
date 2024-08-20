import { useState } from "react";
import Checkbox from "@components/common/CheckBox";
import {
  SelectorContainer,
  SelectorItem,
  ControlContainer,
  TextContainer
} from "@public/style/Project.styles";
import mockData from "@utils/mockData.json";

const VariantSelector = ({ selectedFrameworkIndex }) => {
  const variants = mockData.frameworkSelector;
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  if (selectedFrameworkIndex === null) {
    return <div>Please select a framework first.</div>;
  }

  const selectedFramework = variants[selectedFrameworkIndex];

  const handleCheckboxChange = optionIndex => {
    const newSelectedIndex =
      optionIndex === selectedOptionIndex ? null : optionIndex;
    setSelectedOptionIndex(newSelectedIndex);
  };

  return (
    <SelectorContainer>
      {selectedFramework.option.map((option, optionIndex) => (
        <SelectorItem key={`${selectedFrameworkIndex}-${optionIndex}`}>
          <TextContainer>
            <span>{option.name}</span>
          </TextContainer>
          <ControlContainer>
            <Checkbox
              id={`checkbox-on-${selectedFrameworkIndex}-${optionIndex}`}
              checked={selectedOptionIndex === optionIndex}
              onChange={() => handleCheckboxChange(optionIndex)}
            />
          </ControlContainer>
        </SelectorItem>
      ))}
    </SelectorContainer>
  );
};

export default VariantSelector;
