import { SideBar, Main, Paper, UniversityCard, TutorsList, Section, TutorForm, GeneraiCardList } from "../components";
import universityData from '../constants/universityData.json'
import tutorIcon from '../assets/images/teachers-emoji.png'
import { Component } from "react";

class App extends Component{
  state = {
    cities:
      universityData.cities.map(city => ({
      text: city
    })) ?? [],

    departments:
      universityData.department.map(({ name }) => ({
      text: name
      })) ?? [],
    
    tutors: universityData.tutors ?? []
  }
  onEdit = () => console.log('edit');
  onDelete = () => console.log('delete');
  hendleToggleMenu = () => console.log('click');

  render() {
    const {cities, departments, tutors} = this.state
    return (
    <div className="app">
          <SideBar></SideBar>
      <Main>
        <Section isRightPosition isRow title='Информация о университете'>
          <UniversityCard
          name={universityData.name}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
          />
          <Paper>
            <samp>{ universityData.description}</samp>
          </Paper>
        </Section>
        <Section imege={tutorIcon} title='Преподаватели'>
          <TutorsList tutors={tutors} />
        </Section>
        <Section>
            <GeneraiCardList
              listData={cities}
              isOpenDown={this.hendleToggleMenu}
            />
        </Section>
        <Section>
            <GeneraiCardList
              listData={departments}
              isOpenDown={this.hendleToggleMenu}
            />
        </Section>
        
        <TutorForm/>
      </Main>
    </div>
  );
};
}


export default App;
