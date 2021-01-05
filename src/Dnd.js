import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Dnd = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems(10));
    }, []);

    // 가짜 데이터 제너레이터
    const getItems = (count) => Array.from({length: count}, (v, k) => k).map(k => ({
        id: `itme-${k}`,
        content: `ìtem ${k}`
    }));

    // 결과 재정렬을 돕는 함수
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    // 스타일
    const grid = 8;
    const getItemStyle = (draggalbeStyle, isDragging) => ({
        userSelect: 'none',
        padding: grid * 2,
        marginBottom: grid,

        // 드래깅시 배경색 변경
        background: isDragging ? 'lightgreen' : 'grey',

        // 드래그에 필요한 스타일 적용
        ...draggalbeStyle
    });
    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: grid,
        width: 250,
    });

    const onDragEnd = (result) => {
        if(!result.destination) {
            return;
        }

        const item = reorder(
            items,
            result.source.index,
            result.destination.index
        );

        setItems(item);
    }

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div 
                        ref={provided.innerRef} 
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps} 
                    >
                        {items.map(item => (
                            <Draggable key={item.id} draggableId={item.id}>
                                {(provided, snapshot) => (
                                    <div>
                                        <div 
                                            ref={provided.innerRef} 
                                            style={getItemStyle(
                                                provided.draggableStyle,
                                                snapshot.isDragging
                                            )}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            >
                                                {item.content}
                                            </div>
                                            {provided.placeholder}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default Dnd;