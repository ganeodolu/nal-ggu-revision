import { useRecoilState } from "recoil";
import SelectedCard from "@/components/atoms/SelectedCard";
import { CategoryItem } from "@/lib/types";
import React, { useCallback } from "react";
import styled from "styled-components";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from "react-beautiful-dnd";
import { categoryListState } from "@/lib/store";

const Select = () => {
  const [selectedCategoryList, setSelectedCategoryList] =
    useRecoilState(categoryListState);
  const handleChangeOrder = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;
      if (!destination) return;
      if (
        destination.droppableId === source.droppableId &&
        source.index === destination.index
      )
        return;
      const newSelectedCategoryList = [...selectedCategoryList];
      const [cutItem] = newSelectedCategoryList.splice(result.source.index, 1);
      newSelectedCategoryList.splice(destination.index, 0, cutItem);
      setSelectedCategoryList(newSelectedCategoryList);
    },
    [selectedCategoryList]
  );

  return (
    <Container>
      <Title>날꾸를 마음대로 꾸며주세요!</Title>
      <DragDropContext onDragEnd={handleChangeOrder}>
        <Droppable droppableId="infoList">
          {(provided) => (
            <div
              className="infoList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {selectedCategoryList.map((userWeather: CategoryItem, i) => (
                <Draggable
                  draggableId={userWeather.category}
                  index={i}
                  key={userWeather.category}
                >
                  {(provided, Snapshot) => {
                    return (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <SelectedCard
                          // isDragging={Snapshot.isDragging}
                          data={userWeather}
                          key={userWeather.category}
                          index={i}
                        />
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 80px;
`;

const Title = styled.p`
  text-align: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export default Select;
