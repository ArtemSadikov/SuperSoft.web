import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {PageContainer} from '../../components';
import avatar from '../../assets/images/logo192.png';
import './Home.css';
import {IProject, IUser} from '../../utils';
import THREE_DOTS from '../../assets/images/менюка.png';
import {Link} from 'react-router-dom';
import {useProject} from '../../redux/selectors';
import {useFetch} from '../../hooks';

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
  const {setProject} = useProject();
  const [requestProjects, projects] = useFetch<IProject[]>();
  const [selectedProject, setSelectedProject] = useState<IProject>();

  const handleOnAddProjectPress = useCallback(() => {
  }, []);

  useEffect(() => {
    requestProjects('/checkProjects');
    if (projects && projects.length !== 0) {
      setSelectedProject(projects[0]);
    }
  }, []);

  const handleOnSelect = useCallback((id: number) => {
    if (projects) {
      const project = projects.find((project) => project.id === id);
      if (project) {
        setSelectedProject(project);
        setProject(project.id);
      }
    }
  }, [projects, setProject]);

  const renderProject = useCallback((item: IProject) => {
    if (selectedProject) {
      return (
        <ProjectItem key={item.id}
                     onSelect={handleOnSelect}
                     item={item}
                     selected={item.id === selectedProject.id}
        />
      );
    }

    return null;
  }, [handleOnSelect, selectedProject]);

  const renderMember = useCallback((member: IUser) => {
    return (
      <text className="project-member-name-text">{member.name}</text>
    );
  }, []);

  return (
    <PageContainer title="Projects"
                   onAddIconPress={handleOnAddProjectPress}
                   userImage={avatar}>
      <div className="projects-list-container">
        {projects && (
          <ul className="projects-list">
            {projects.map(renderProject)}
          </ul>
        )}
      </div>
      {selectedProject && (
        <>
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
            <div className="project-view-tasks-button">
              <text className="project-view-tasks-button-text">View tasks</text>
            </div>
          </Link>
        </>
      )}
    </PageContainer>
  );
};
