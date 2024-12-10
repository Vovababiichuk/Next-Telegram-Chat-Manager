// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// const withAuth = (Component: React.FC) => {
//   const AuthenticatedComponent = (props: any) => {
//     const router = useRouter();

//     useEffect(() => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         router.push('/login');
//       }
//     }, [router]);

//     return <Component {...props} />;
//   };

//   return AuthenticatedComponent;
// };

// export default withAuth;

// /*!SECTION
// Використовуйте HOC у приватних компонентах:

// import withAuth from '../hoc/withAuth';

// const ChatsPage = () => {
//     return <div>Your chats here...</div>;
// };

// export default withAuth(ChatsPage);
// */
