import CadastroClienteGrid from '../../pages/cadastros/cadastroCliente/container/cadastroCliente.grid';
import CadastroClienteNew from '../../pages/cadastros/cadastroCliente/container/cadastroCliente.new';
import CadastroClienteView from '../../pages/cadastros/cadastroCliente/container/cadastroCliente.view';
import CadastroClienteEdit from '../../pages/cadastros/cadastroCliente/container/cadastroCliente.edit';

const cadastroCliente = [
  {
    path: '/cadastroCliente/grid',
    component: CadastroClienteGrid,
    isPrivate: true,
    exact: true,
    breadcrumb: 'Home / Modulos / Cadastros / Clientes',
  },
  {
    path: '/cadastroCliente/new',
    component: CadastroClienteNew,
    isPrivate: true,
    exact: true,
    breadcrumb: 'Home / Modulos / Cadastros / Clientes / Novo',
  },
  {
    path: '/cadastroCliente/view',
    component: CadastroClienteView,
    isPrivate: true,
    exact: true,
    breadcrumb: 'Home / Modulos / Cadastros / Clientes / Visualização',
  },
  {
    path: '/cadastroCliente/edit',
    component: CadastroClienteEdit,
    isPrivate: true,
    exact: true,
    breadcrumb: 'Home / Modulos / Cadastros / Clientes / Edição',
  },
];

export default cadastroCliente;
