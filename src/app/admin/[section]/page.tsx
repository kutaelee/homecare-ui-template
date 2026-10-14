import {notFound} from 'next/navigation';
import AdminWorkspace from '@/components/AdminWorkspace';
export function generateStaticParams(){return ['services','cases','faqs','inquiries','reservations','qna','assets','settings'].map(section=>({section}))}
export default async function AdminSection({params}:{params:Promise<{section:string}>}){const {section}=await params; if(!['services','cases','faqs','inquiries','reservations','qna','assets','settings'].includes(section))notFound();return <AdminWorkspace section={section}/>}
