import { useEffect } from "react";
import Checkbox from "@components/common/CheckBox";
import {
  SelectorContainer,
  SelectorItem,
  TextContainer,
  ControlContainer
} from "@public/style/Project.styles";
import useProjectStore from "@/store/projectStore";
import mockData from "@utils/mockData.json";

const FrameworkSelector = ({
  selectedFrameworkIndex,
  setSelectedFrameworkIndex
}) => {
  const { setFrameworksSelected } = useProjectStore();
  const dependencies = mockData.frameworkSelector;

  const handleCheckboxChange = index => {
    const newSelectedIndex = index === selectedFrameworkIndex ? null : index;
    setSelectedFrameworkIndex(newSelectedIndex);
  };

  useEffect(() => {
    setFrameworksSelected(selectedFrameworkIndex !== null);
  }, [selectedFrameworkIndex, setFrameworksSelected]);

  return (
    <SelectorContainer>
      {dependencies.map((dependency, index) => (
        <SelectorItem key={index}>
          <TextContainer>
            <span>{dependency.name}</span>
          </TextContainer>
          <ControlContainer>
            <Checkbox
              checked={selectedFrameworkIndex === index}
              onChange={() => handleCheckboxChange(index)}
              id={`checkbox-${index}`}
            />
          </ControlContainer>
        </SelectorItem>
      ))}
    </SelectorContainer>
  );
};

export default FrameworkSelector;
