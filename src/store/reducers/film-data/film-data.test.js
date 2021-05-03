import {createAPI} from "../../../sevices/api";
import MockAdapter from "axios-mock-adapter";
import {fetchFilmList} from "../../api-actions";
import {ActionType} from "../../action";
import {HttpCode} from "../../../enum";

const api = createAPI(() => {});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /main`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmListLoader = fetchFilmList();

    apiMock
      .onGet(`/films`)
      .reply(HttpCode.SUCCESS, [{fake: true}]);

    return filmListLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM_LIST,
          payload: [{fake: true}],
        });
      });
  });

});
