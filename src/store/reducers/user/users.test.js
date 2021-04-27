import {createAPI} from "../../../sevices/api";
import MockAdapter from "axios-mock-adapter";
import {checkAuth, fetchLogin} from "../../api-actions";
import {ActionType} from "../../action";
import {AuthorisationStatus as AuthorizationStatus} from "../../../const";

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);
const dispatch = jest.fn();


describe(`Async operation work correctly for users`, () => {
  it(`Should make a correct API call to /login`, () => {
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const fetchLoginLoader = fetchLogin();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return fetchLoginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });


});
