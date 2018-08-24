import reducer from './index';
import { ADD_CARD } from '../actions';
import {card} from '../data/constance.js'

describe('setStack reducer', ()=>{
  test('sets the cards', ()=>expect( reducer({}, {}) ).toEqual( {"cards":[]} ));
  test('set the cards reducer', () =>expect( reducer({}, {type: ADD_CARD, payload: card })).toEqual({"cards": [card]}));
});
