import Admin from '../../pages/cadastros/admin/components/admin.form';

const admin = [
  {
    path: '/admin',
    component: Admin,
    isPrivate: true,
    exact: true,
    breadcrumb: 'Clash Cup / Admin',
  },
];

export default admin;
