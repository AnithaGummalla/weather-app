import { Box } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

const floatingElementsData = [
  {
    icon: CloudIcon,
    top: "20%",
    left: "15%",
    size: 50,
    color: "rgba(38, 98, 172, 0.3)",
  },
  {
    icon: CloudIcon,
    top: "40%",
    left: "3%",
    size: 70,
    color: "rgba(255,255,255,0.2)",
  },
  {
    icon: CloudIcon,
    top: "60%",
    left: "90%",
    size: 35,
    color: "rgba(255,255,255,0.3)",
  },
];

const FloatingElements = () => (
  <>
    {floatingElementsData.map((elem, idx) => {
      const IconComponent = elem.icon;
      return (
        <Box
          key={idx}
          sx={{
            position: "absolute",
            top: elem.top,
            left: elem.left,
            transform: "translate(-50%, -50%)",
            animation: `float ${6 + idx * 2}s ease-in-out infinite`,
            "@keyframes float": {
              "0%, 100%": {
                transform: "translate(-50%, -50%) translateY(0) scale(1)",
              },
              "50%": {
                transform:
                  "translate(-50%, -50%) translateY(-15px) scale(1.05)",
              },
            },
          }}
        >
          <IconComponent sx={{ fontSize: elem.size, color: elem.color }} />
        </Box>
      );
    })}
  </>
);

export default FloatingElements;
