import Layout from '../components/MyLayout';
import Header from '../components/Header';
import Table from 'react-bootstrap/Table';

export default () => (
    <Layout>
        <br></br>
        <h4>Contact</h4>
        <Table>
            <tr>
                <td><b>Email</b></td>
                <td>kaylanpalmer8@gmail.com</td>
            </tr>
            <tr>
                <td><b>Phone</b></td>
                <td>083 397 8547</td>
            </tr>
            <tr>
                <td><b>Address</b></td>
                <td>Meredale. Johannesburg. South Africa</td>
            </tr>
        </Table>
    </Layout>
)