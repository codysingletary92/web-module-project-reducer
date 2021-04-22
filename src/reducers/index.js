import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, CHANGE_MEMORY } from './../actions';

export const initialState = {
    total: '',
    operation: "+",
    memory: ''
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {  
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: ''
            })
        
        case(CHANGE_MEMORY):
            switch(action.payload) {
                case("M+"):
                    // make memory equal what is displayed
                    return ({
                        ...state,
                        memory: state.total
                    })
                case("MR"):
                    //add memory's value to the displayed value
                    return ({
                        ...state,
                        total: state.total + state.memory
                    })
                case("MC"):
                    //memory cleared, or set to 0
                    return({
                        ...state,
                        memory: 0
                    })
            }
    }
}

export default reducer;