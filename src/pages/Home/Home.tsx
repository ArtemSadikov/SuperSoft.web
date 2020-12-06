import React, {useCallback, useMemo, useState} from 'react';
import {PageContainer} from '../../components';
import avatar from '../../assets/images/logo192.png';
import './Home.css';
import {FAKE_PROJECTS, ProjectInterface} from '../../utils';

interface ProjectItemInterface {
  item: ProjectInterface;
  selected: boolean;
  onSelect: (id: number) => void;
}

const ProjectItem = (props: ProjectItemInterface) => {
  const {item, onSelect, selected} = props;

  const projectTextStyle = useMemo<string>(() => {
    let res = 'project-name-text';

    if (selected) {
      res += " selected-project";
      console.log(res);
    }
    return res;
  }, [selected]);

  const handleOnSelect = useCallback(() => {
    onSelect(item.id);
  }, [item.id, onSelect])

  return (
    <button onClick={handleOnSelect} className="project-title-container">
      <div className="project-icon-container">
        <img src={item.image}
             alt={String(item.id)}
             className="project-icon"/>
      </div>
      <h4 className={projectTextStyle}>{item.name}</h4>
    </button>
  );
};

export const Home = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleOnAddProjectPress = useCallback(() => {
  }, []);

  const handleOnSelect = useCallback((id: number) => {
    console.log(id);
    setSelected(id);
  }, []);

  const renderProject = useCallback((item: ProjectInterface) => {
    console.log(item.id === selected);
    return <ProjectItem key={item.id}
                        onSelect={handleOnSelect}
                        item={item}
                        selected={item.id === selected}/>;
  }, [handleOnSelect, selected]);

  return (
    <PageContainer title="Projects"
                   onAddIconPress={handleOnAddProjectPress}
                   userImage={avatar}>
      <div className="home-page-container">
        <div className="projects-list-container">
          <ul className="projects-list">
            {FAKE_PROJECTS.map(renderProject)}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};
