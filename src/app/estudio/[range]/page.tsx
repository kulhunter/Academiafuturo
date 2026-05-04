import { bancoPreguntas } from '@/lib/preguntas';
import RangeStudyClient from './RangeStudyClient';

interface PageProps {
  params: { range: string };
}

export function generateStaticParams() {
  const ranges = [
    '1-40', '41-80', '81-120', '121-160', '161-200', '201-240', '241-280'
  ];
  return ranges.map((range) => ({
    range: range,
  }));
}

export default async function RangeStudyPage({ params }: PageProps) {
  const { range } = params;
  const [start, end] = range.split('-').map(Number);
  
  const filteredQuestions = bancoPreguntas.filter(q => q.id >= start && q.id <= end);

  return <RangeStudyClient initialQuestions={filteredQuestions} range={range} />;
}
