import { SideBar, Main, Paper, UniversityCard, TutorsList, Section, TutorForm } from "../components";
import universityData from '../constants/universityData.json'
import tutorIcon from '../assets/images/teachers-emoji.png'

export const App = () => {
  const onEdit = () => console.log('edit')
  const onDelete = () => console.log('delete')

  return (
    <div className="app">
          <SideBar></SideBar>
      <Main>
        <Section isRightPosition isRow title='Информация о университете'>
          <UniversityCard
          name={universityData.name}
          onEdit={onEdit}
          onDelete={onDelete}
          />
          <Paper>
            <samp>{ universityData.description}</samp>
          </Paper>
        </Section>
        <Section imege={tutorIcon} title='Преподаватели'>
          <TutorsList tutors={universityData.tutors} />
        </Section>
        
        <TutorForm/>
      </Main>
    </div>
  );
};

export default App;
