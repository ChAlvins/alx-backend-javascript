interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () : string => 'Working from home';
  getToWork = () : string => 'Getting a coffee break';
  workDirectorTasks = () : string => 'Getting to director tasks';
}
