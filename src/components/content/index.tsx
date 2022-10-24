import React from 'react';
import {Layout} from 'antd';
import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';

const {Content} = Layout;

interface DataType {
  key: string;
  date: string;
  hero: string;
  team: string;
  result: string;
  type: string;
}

const MainContent = ({gameData}) => {

  const columns: ColumnsType<DataType> = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Hero',
      dataIndex: 'hero',
      key: 'hero',
    },
    {
      title: 'Team mode',
      dataIndex: 'team',
      key: 'team',
    },
    {
      title: 'Result',
      key: 'result',
      dataIndex: 'result',
      render: (_, {result}) => {
        let color = result === 'loss' ? 'volcano' : 'green';
        return (
          <Tag color={color} key={result}>
            {result.toUpperCase()}
          </Tag>
        )
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (_, {type}) => {
       return type[0].toUpperCase() + type.slice(1)
      }
    },
  ];

  // const data: DataType[] = [
  //   {
  //     key: '1',
  //     date: '24.10.2022',
  //     hero: 'Axe',
  //     team: 'Radiant',
  //     result: 'loss',
  //     type: 'all pick'
  //   }
  // ];

  return (
    <Content style={{margin: '24px 16px 0'}}>
      <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
        <Table bordered columns={columns} dataSource={gameData}/>
      </div>
    </Content>
  );
};

export default MainContent;
