import React, {useCallback, useMemo, useState} from 'react';
import {PageContainer} from '../../components';
import avatar from '../../assets/images/logo192.png';
import './Home.css';
import {FAKE_PROJECTS, IProject, IUser} from '../../utils';
import THREE_DOTS from '../../assets/images/менюка.png';
import {Link} from 'react-router-dom';

interface ProjectItemInterface {
  item: IProject;
  selected: boolean;
  onSelect: (id: number) => void;
}

const ProjectItem = (props: ProjectItemInterface) => {
  const {item, onSelect, selected} = props;

  const projectTextStyle = useMemo<string>(() => {
    let res = 'project-name-text';

    if (selected) {
      res += ' selected-project';
    }
    return res;
  }, [selected]);

  const handleOnSelect = useCallback(() => {
    console.log('item.id', item.id);
    onSelect(item.id);
  }, [item.id, onSelect]);

  return (
    <button onClick={handleOnSelect}
            className="project-title-container">
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
  const [selectedProject, setSelectedProject] = useState<IProject>(FAKE_PROJECTS[0]);
  const [projects, setProjects] = useState<IProject[]>(FAKE_PROJECTS);

  const handleOnAddProjectPress = useCallback(() => {
  }, []);

  const handleOnSelect = useCallback((id: number) => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      setSelectedProject(project);
    }
  }, [projects]);

  const renderProject = useCallback((item: IProject) => {
    console.log(selectedProject.id);
    return (
      <ProjectItem key={item.id}
                   onSelect={handleOnSelect}
                   item={item}
                   selected={item.id === selectedProject.id}
      />
    );
  }, [handleOnSelect, selectedProject.id]);

  const renderMember = useCallback((member: IUser) => {
    return (
      <text className="project-member-name-text">{member.name}</text>
    );
  }, []);

  const onViewTasksClick = useCallback(() => {

  }, []);

  return (
    <PageContainer title="Projects"
                   onAddIconPress={handleOnAddProjectPress}
                   userImage={avatar}>
      <div className="projects-list-container">
        <ul className="projects-list">
          {projects.map(renderProject)}
        </ul>
      </div>
      <div className="project-description-wrapper">
        <div className="project-description-header">
          <div className="project-description-title">
            <img alt={selectedProject.id.toString()}
                 src={selectedProject.image}
                 className="project-description-title-image"
            />
            <text className="project-description-title-text">{selectedProject.name}</text>
          </div>

          <button className="project-description-header-button">
            <img className="project-description-header-button-image"
                 src={THREE_DOTS}
                 alt="menu"/>
          </button>
        </div>

        <div className="project-description-container-wrapper">
          <div className="project-description-container">
            <p className="project-description-text">{selectedProject.description}</p>
          </div>

          {selectedProject.members && (
            <div className="project-members-list-wrapper">
              <text className="project-members-list-title">Members</text>
              {selectedProject.members.map(renderMember)}
            </div>
          )}
        </div>
      </div>

      <Link to="/tasks">
        <button onClick={onViewTasksClick}
                className="project-view-tasks-button">
          <text className="project-view-tasks-button-text">View tasks</text>
        </button>
      </Link>
    </PageContainer>
  );
};
