const APP = {
	CONNECT_REQUEST: 'CONNECT_REQUEST',
	CONNECT_SUCCESS: 'CONNECT_SUCCESS',
	CONNECT_FAILURE: 'CONNECT_FAILURE',
	DISCONNECT: 'DISCONNECT',
	SET_HEADERS: 'SET_HEADERS',
};

const MAPPINGS = {
	MAPPINGS_FETCH_REQUEST: 'MAPPINGS_FETCH_REQUEST',
	MAPPINGS_FETCH_SUCCESS: 'MAPPINGS_FETCH_SUCCESS',
	MAPPINGS_FETCH_FAILURE: 'MAPPINGS_FETCH_FAILURE',
	ADD_MAPPING_REQUEST: 'ADD_MAPPING_REQUEST',
	ADD_MAPPING_SUCCESS: 'ADD_MAPPING_SUCCESS',
	ADD_MAPPING_FAILURE: 'ADD_MAPPING_FAILURE',
	SET_VISIBLE_COLUMNS: 'SET_VISIBLE_COLUMNS',
	SET_NESTED_VISIBLE_COLUMNS: 'SET_NESTED_VISIBLE_COLUMNS',
	SET_ARRAY_FIELDS: 'SET_ARRAY_FIELDS',
};

const CELL = {
	CELL_ACTIVE: 'CELL_ACTIVE',
	CELL_HIGHLIGHT: 'CELL_HIGHLIGHT',
	CELL_SETVALUE_REQUEST: 'CELL_SETVALUE_REQUEST',
	CELL_SETVALUE_SUCCESS: 'CELL_SETVALUE_SUCCESS',
	CELL_SETVALUE_FAILURE: 'CELL_SETVALUE_FAILURE',
};

const DATA = {
	ADD_DATA_REQUEST: 'ADD_DATA_REQUEST',
	ADD_DATA_SUCCESS: 'ADD_DATA_SUCCESS',
	ADD_DATA_FAILUREL: 'ADD_DATA_FAILURE',
	UPDATE_REACTIVE_LIST: 'UPDATE_REACTIVE_LIST',
};

const MODE = {
	SET_MODE: 'SET_MODE',
};

const ERROR = {
	SET_ERROR: 'SET_ERROR',
	CLEAR_ERROR: 'CLEAR_ERROR',
};

const SELECTED_ROWS = {
	SET_SELECTED_ROWS: 'SET_SELECTED_ROWS',
};

const UPDATING_ROW = {
	SET_UPDATING_ROW: 'SET_UPDATING_ROW',
};

const CURRENT_IDS = {
	SET_CURRENT_IDS: 'SET_CURRENT_IDS',
};

const SORT = {
	SET_SORT: 'SET_SORT',
	RESET_SORT: 'RESET_SORT',
};

const PAGE_SIZE = {
	SET_PAGE_SIZE: 'SET_PAGE_SIZE',
};

const NESTED_COLUMNS = {
	SET_IS_SHOWING_NESTED_COLUMNS: 'SET_IS_SHOWING_NESTED_COLUMNS',
};

const VERSION = {
	SET_VERSION: 'SET_VERSION',
};

export {
	APP,
	CELL,
	DATA,
	MAPPINGS,
	MODE,
	ERROR,
	SELECTED_ROWS,
	UPDATING_ROW,
	CURRENT_IDS,
	SORT,
	PAGE_SIZE,
	NESTED_COLUMNS,
	VERSION,
};
