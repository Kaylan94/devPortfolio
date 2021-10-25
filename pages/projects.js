import Header from "../components/Header";
import Layout from "../components/MyLayout";
import Table from 'react-bootstrap/Table';

export default () => (
    <Layout>
        <br></br>
        <h4>Projects</h4>
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>#</th>
            <th>Project Description</th>
            <th>Language</th>
            <th>Link</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Task Manager</td>
            <td>Python</td>
            <td>
                <a target="_blank" href="https://github.com/Kaylan94/Task_Manager">Task_Manager</a>
            </td>
            </tr>
            <tr>
            <td>2</td>
            <td>Project Manager</td>
            <td>Java</td>
            <td>
                <a target="_blank" href="https://github.com/Kaylan94/level2_cap1">Project_Manager</a>
            </td>
            </tr>
            <tr>
            <td>3</td>
            <td>Magic Square</td>
            <td>Python</td>
            <td>
                <a target="_blank" href="https://github.com/Kaylan94/MagicSquare">Magic_Square</a>
            </td>
            </tr>
            <tr>
            <td>4</td>
            <td>WeatherApp</td>
            <td>JavaScript+React</td>
            <td>
                <a target="_blank" href="https://github.com/Kaylan94/WeatherApp">WeatherApp</a>
            </td>
            </tr>
            <tr>
            <td>5</td>
            <td>MiSearch App</td>
            <td>JavaScript+Express+React</td>
            <td>
            <a target="_blank" href="https://github.com/Kaylan94/MiSearchApp">Git_Repo</a> | <a target="_blank" href="https://mi-search-app.herokuapp.com/">Live_App</a>
            </td>
            </tr>
            <tr>
            <td>6</td>
            <td>Todo-App</td>
            <td>JavaScript+Express+React+MongoDB</td>
            <td>
                <a target="_blank" href="https://github.com/Kaylan94/TodoApp">Todo_App</a>
            </td>
            </tr>
            <tr>
            <td>7</td>
            <td>CarMern</td>
            <td>JavaScript+Node+React+MongoDB</td>
            <td>
                <a target="_blank" href="https://github.com/Kaylan94/CarMern">CarMern</a>
            </td>
            </tr>
            <tr>
            <td>8</td>
            <td>Project Logger</td>
            <td>JavaScript+Express+React</td>
            <td>
                <a target="_blank" href="https://github.com/Kaylan94/Project-Logger">Project_Logger</a>
            </td>
            </tr>
            <tr>
            <td>9</td>
            <td>Online Store</td>
            <td>HTML+CSS+JavaScript</td>
            <td>
                <a target="_blank" href="https://github.com/Kaylan94/Git_Task2">Online_Store</a>
            </td>
            </tr>
        </tbody>
        </Table>
    </Layout>
)