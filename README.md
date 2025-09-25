# TodoItemCreator()

새로운 todo 아이템을 생성하기 위해 우리는 `todoListState` 내용을 업데이트하는 setter 함수에 접근해야 한다.  
우리는 `TodoItemCreator` 컴포넌트의 setter 함수를 얻기 위해 `useSetRecoilState()` 훅을 사용할 수 있다.

| Hook | 설명                                                                              |
|------|---------------------------------------------------------------------------------|
| **useRecoilState()** | `useState()`와 유사하여 `[state, setState]` 튜플을 반환합니다. 인자로 Atoms 혹은 Selector를 넣어줍니다. |
| **useRecoilValue()** | 전역 상태의 state 값을 참조하기 위해 사용됩니다. 선언된 변수에 할당하여 사용하면 됩니다.                           |
| **useSetRecoilState()** | 전역 상태의 setter 함수를 활용하기 위해 사용됩니다. 선언된 함수에 할당하여 사용하면 됩니다.                         |
| **useResetRecoilState()** | 전역 상태를 default(초기값)으로 Reset 하기 위해 사용됩니다. 선언된 함수에 할당하여 사용하면 됩니다.                 |


# Selector를 이용해서 비동기 요청을 한 데이터를 전역 상태에 넣어주기

`selector`는 기본적으로 값을 자체적으로 캐싱합니다.  
만약 입력된 적 있는 값이라면 그 값을 기억하고, 이 값이 다시 호출되면 이전에 캐싱된 결과를 바로 보여주기 때문에 비동기 데이터를 다루는 측면에서 유리합니다.
