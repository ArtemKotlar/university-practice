import { SideBar, Main, Paper } from "../components";

export const App = () => {
  return (
    <div className="app">
          <SideBar></SideBar>
          <Main>
              <Paper>Paper from ....</Paper>
              <Paper>
                  Опыт, концентрат знаний и возможность избежать большинство ошибок при приеме на работу. Мы знаем, что хотят большинство локальных и иностранных компаний и можем вам это дать. А еще мы постоянно совершенствуем наши курсы программирования, добавляя туда что-то новое. Вы можете лично ознакомиться с историями успеха наших выпускников, чтобы убедиться в эффективности нашей методики обучения. Да, мы начнем с азов и самой простой информации. Знаем, что большинство людей приходят к нам с нулевыми знаниями.
              </Paper>
          </Main>
      </div>
  );
};

export default App;
