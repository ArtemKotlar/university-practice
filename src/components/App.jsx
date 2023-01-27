import { SideBar, Main, Paper, UniversityCard, TutorsList, TutorForm } from "../components";
import universityData from '../constants/universityData.json'

export const App = () => {
  const onEdit = () => console.log('edit')
  const onDelete = () => console.log('delete')

  return (
    <div className="app">
          <SideBar></SideBar>
          <Main>
        <UniversityCard
          name={universityData.name}
          onEdit={onEdit}
          onDelete={onDelete}
        />
        <Paper>
          <samp>{ universityData.description}</samp>
        </Paper>
        <TutorsList tutors={universityData.tutors} />
        <TutorForm/>
          </Main>
      </div>
  );
};

export default App;
