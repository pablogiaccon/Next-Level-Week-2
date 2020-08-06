import React, { useState, useCallback, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, SearchForm } from './styles';
import api from '../../services/api';

export interface ITeacher {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const response = await api.get<ITeacher[]>('classes/search', {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(response.data);
    },
    [subject, week_day, time],
  );

  useEffect(() => {
    async function loadClasses() {
      const response = await api.get<ITeacher[]>('classes');

      console.log(response.data);
      setTeachers(response.data);
    }

    loadClasses();
  }, []);

  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <SearchForm onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Português', label: 'Português' },
              { value: 'História', label: 'História' },
              { value: 'Química', label: 'Química' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3 Física', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </SearchForm>
      </PageHeader>

      <main>
        {teachers &&
          teachers.map(teacher => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))}

        {teachers &&
          teachers.map(teacher => <p key={teacher.id}>{teacher.name}</p>)}
      </main>
    </Container>
  );
};

export default TeacherList;
