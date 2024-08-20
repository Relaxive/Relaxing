import { useEffect } from "react";
import { PageContentContainer } from "@public/style/Project.styles";
import { useNavigation } from "@utils/common";
import icons from "@public/images";
import useUIStore from "@/store/uiStore";
import useProjectStore from "@/store/projectStore";

const ProjectList = () => {
  const { showModal } = useUIStore();
  const { projects, setProjects, checkProjectPath } = useProjectStore();
  const { navigateToPath } = useNavigation();

  useEffect(() => {
    const loadProjectLists = async () => {
      try {
        const path = "TEMPORARY_PATH";

        const projectData = await window.api.loadProjectList(path);
        setProjects([projectData]);
      } catch (error) {
        console.error(error);
      }
    };

    loadProjectLists();
  }, [setProjects]);

  const handleProjectClick = project => {
    if (checkProjectPath(project.path)) {
      navigateToPath(`/dashboard/${project.id}`);
    } else {
      showModal(`경로를 찾을 수 없습니다: ${project.path}`);
    }
  };

  const handleIconClick = project => {
    console.log(`삭제할 프로젝트: ${project.projectName}`);
  };

  return (
    <PageContentContainer>
      <h1>Project List</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index} onClick={() => handleProjectClick(project)}>
            <div className="project-title">
              <span>{project.projectName}</span>
              <span>{project.path}</span>
            </div>

            <button>
              <img
                src={icons.closeIcon}
                alt="Close Icon"
                onClick={e => {
                  e.stopPropagation();
                  handleIconClick(project);
                }}
              />
            </button>
          </li>
        ))}
      </ul>
    </PageContentContainer>
  );
};

export default ProjectList;
