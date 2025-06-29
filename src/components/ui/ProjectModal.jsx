import * as Dialog from "@radix-ui/react-dialog";
import PropTypes from "prop-types";

export default function ProjectModal({ project, onClose, open }) {
  if (!open || !project) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-fadeIn" />
        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card text-card-foreground rounded-lg shadow-lg max-w-lg w-full mx-4 animate-fadeIn focus:outline-none">
          <Dialog.Close asChild>
            <button
              className="absolute top-3 right-3 text-xl font-bold text-muted-foreground hover:text-primary transition"
              aria-label="Close"
            >
              ×
            </button>
          </Dialog.Close>
          <div className="p-6 max-h-[80vh] overflow-y-auto scrollbar-hide">
            <Dialog.Title className="text-2xl font-bold mb-2">{project.title}</Dialog.Title>
            <Dialog.Description className="mb-4 text-muted-foreground">{project.overview}</Dialog.Description>
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {project.features?.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.techStacks &&
                  Object.entries(project.techStacks).map(([key, stack]) => (
                    <div key={key}>
                      <span className="font-medium capitalize">{key}:</span>{" "}
                      {Array.isArray(stack) ? stack.join(", ") : stack}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    techStacks: PropTypes.object,
  }),
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};