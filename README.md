# React Router Dom V6

| 프로젝트 기간 | 22.12.13 ~          |
| ------------- | ------------------- |
| 프로젝트 목적 | React router dom v6 |
| Github        | ‣                   |

---

`npm i react-router-dom@6.4`

- [x] BrowserRouter
- [x] CreateBrowserRouter
- [ ] Route
  - [ ] errorElement
- [ ] useNavigate
- [ ] useParams
- [ ] Outlet
- [ ] useOutletContext
- [ ] useSearchParams

---

## createBrowserRouter

[docs](https://reactrouter.com/en/main/routers/create-browser-router#createbrowserrouter)

모든 React Router 웹 프로젝트에 권장되는 라우터입니다.

DOM History API를 사용하여 URL을 업데이트하고 기록 스택을 관리합니다.

```tsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: 'team',
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);
```
