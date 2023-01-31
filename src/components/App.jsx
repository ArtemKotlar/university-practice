import {
  SideBar,
  Main,
  Paper,
  UniversityCard,
  TutorsList,
  Section,
  TutorForm,
  GeneraiCardList,
  Button,
  InfoForm,
} from '../components';
import universityData from '../constants/universityData.json';
import tutorIcon from '../assets/images/teachers-emoji.png';
import { Component } from 'react';
import FORMS from 'constants/forms';

class App extends Component {
  state = {
    cities:
      universityData.cities.map(city => ({
        text: city,
      })) ?? [],

    departments:
      universityData.department.map(({ name }) => ({
        text: name,
      })) ?? [],

    tutors: universityData.tutors ?? [],
    showForm: null,
  };
  onEdit = () => console.log('edit');
  onDelete = () => console.log('delete');
  hendleToggleMenu = () => console.log('click');

  addTutor = tutor => {
    this.setState(({ tutors }) => {
      return {
        tutors: [...tutors, tutor],
      };
    });
  };

  deleteTutor = name => {
    this.setState(({ tutors }) => {
      return {
        tutors: [...tutors].filter(({ firstName }) => firstName !== name),
      };
    });
  };

  handleShowForm = name => {
    this.setState(({ prev }) => ({
      showForm: prev.showForm === name ? null : name,
    }));
  };

  // addCity = (name) => {
  //   const newCity
  // }

  render() {
    const { cities, departments, tutors } = this.state;
    return (
      <div className="app">
        <SideBar></SideBar>
        <Main>
          <Section isRightPosition isRow title="Информация о университете">
            <UniversityCard
              name={universityData.name}
              onEdit={this.onEdit}
              onDelete={this.onDelete}
            />
            <Paper>
              <samp>{universityData.description}</samp>
            </Paper>
          </Section>
          <Section imege={tutorIcon} title="Преподаватели">
            <TutorsList deleteTutor={this.deleteTutor} tutors={tutors} />
            {this.state.showForm === FORMS.TUTOR_FORM && (
              <TutorForm addTutor={this.addTutor} />
            )}
            <Button
              action={() => this.handleShowForm(FORMS.TUTOR_FORM)}
              text={'Добавить преподавателя'}
              icon
            />
          </Section>
          <Section>
            <GeneraiCardList
              listData={cities}
              isOpenDown={this.hendleToggleMenu}
            />
            {this.state.showForm === FORMS.CITY_FORM && (
              <InfoForm title="Добавление города" pleceholder="Город" />
            )}
            <Button
              action={() => this.handleShowForm(FORMS.CITY_FORM)}
              text={'Добавить город'}
              icon
            />
          </Section>
          <Section>
            <GeneraiCardList
              listData={departments}
              isOpenDown={this.hendleToggleMenu}
            />
            {this.state.showForm === FORMS.DEPARTMENTS_FORM && (
              <InfoForm title="Добавление филиала" pleceholder="Филиал" />
            )}
            <Button
              action={() => this.handleShowForm(FORMS.DEPARTMENTS_FORM)}
              text={'Добавить факультет'}
              icon
            />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
